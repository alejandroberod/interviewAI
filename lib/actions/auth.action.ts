"use server";

import { db } from "@/firebase/admin";

export async function signUp(params: SignUpParams) {
  const { uid, username, email } = params;

  try {
    const userRecord = await db.collection("users").doc(uid).get();

    if (userRecord.exists) {
      return {
        success: false,
        message: "User already registered. Please sign in.",
      };
    }

    await db.collection("users").doc(uid).set({
      username, email
    });
  } catch (error: any) {
    console.error("Error creating a user ", error);

    switch (error.code) {
      case "auth/invalid-email":
        return {
          success: false,
          message: "The email is invalid",
        };

      case "auth/email-already-in-use":
        return {
          success: false,
          message: "This email is already registered",
        };
      default:
        break;
    }

    return {
      success: false,
      message: "Failed to create an account",
    };
  }
}
