"use server"

import { signIn, signOut } from "@/auth"

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/pages/secret" });
}

export async function signOutGoogle() {
  await signOut();
}