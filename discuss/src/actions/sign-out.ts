"use server"
// import { signIn, signOut } from "next-auth/react"
import * as auth from "@/auth"

export const signOut= async()=>{
return auth.signOut();
}