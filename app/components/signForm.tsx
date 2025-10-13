"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import CustomFormField from "./CustomFormField";
import { Field, FieldDescription } from "@/components/ui/field";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";
import { signUp } from "@/lib/actions/auth.action";

const formAuth = (type: FormType) => {
  return z.object({
    username:
      type === "sign-up"
        ? z
            .string()
            .min(2, { error: "Username must be at least 2 characters." })
            .max(50, { error: "Username must be under 50 characters." })
        : z.string().optional(),
    email: z.email({ error: "This is not a valid email address." }),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters." })
      .max(30, { error: "Password cannot be longer than 100 characters." }),
  });
};

export default function SignForm({ type }: { type: FormType }) {
  const router = useRouter();
  const formSchema = formAuth(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-in") {
        toast.success("Welcome");
        router.push("/");
      } else {
        const {username, email, password} = values;

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        const result = await signUp({
          uid: userCredentials.user.uid,
          username: username!,
          email, 
          password
        });

        if (!result?.success) {
          toast.error(result?.message);
          return;
        }

        toast.success("Account created succesfully. Please sign in.");
        router.push("/sign-in");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      return;
    }
  }

  const authConfig = {
    "sign-in": {
      text: "Don't have an account? ",
      linkText: "Sign up",
      linkHref: "/sign-up",
      btnText: "Access your account",
    },
    "sign-up": {
      text: "have an account? ",
      linkText: "Sign in",
      linkHref: "/sign-in",
      btnText: "Create an account",
    },
  };

  const config = authConfig[type];

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-[#23C2ED] text-[24px]">
            <div className="flex justify-center items-center gap-2">
              <Image src="/logo.svg" alt="logo" height={32} width={38} />
              IntervAI
            </div>
          </CardTitle>
          <CardDescription className="text-[20px] text-center text-white font-light">
            Interviews powered by AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                {type === "sign-up" && (
                  <CustomFormField
                    control={form.control}
                    name="username"
                    label="Name"
                    placeholder="Enter your full name"
                  />
                )}
                <CustomFormField
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="m@example.com"
                  type="email"
                />
                <CustomFormField
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                {/* <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="cv">Resume</Label>
                  </div>
                  <Input id="cv" type="file" className="hidden" />
                  <button className="w-full bg-transparent text-[#666666] h-12">
                    Upload a pdf
                  </button>
                </div> */}
                <div className="flex flex-col gap-3">
                  <Field>
                    <Button type="submit" className="w-full">
                      {config.btnText}
                    </Button>
                    <FieldDescription className="text-center">
                      {config.text}
                      <Link href={config.linkHref}>{config.linkText}</Link>
                    </FieldDescription>
                  </Field>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
