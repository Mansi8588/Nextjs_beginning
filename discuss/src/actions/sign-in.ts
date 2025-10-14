"use server"
// import { signIn, signOut } from "next-auth/react"
import * as auth from "@/auth"

export const signIn= async()=>{
return auth.signIn();
}