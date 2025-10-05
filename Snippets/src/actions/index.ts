"use server"

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import {revalidatePath} from "next/cache"

export const saveSnippet=async (id:number,code:string)=>{
    await prisma.snippet.update({
        where:{id},
        data:{code},
    });
     
    revalidatePath(`/snippet/${id}`)
    redirect(`/snippet/${id}`)

}


export const deleteSnippet=async (id:number)=>{
    await prisma.snippet.delete({
        where:{id},
    });
    revalidatePath("/")
redirect("/")
}




 export async function createSnippet(prevState:{message:string}, formData: FormData) {
try{
 const title = formData.get("title")
    const code = formData.get("code") 
    if(!title || !code)
        return {message:"All fields are required"}

    if(typeof title !=="string" || typeof code !=="string"){
        return {message:"Invalid form data"}
    }

   await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    //  throw new Error("Simulated error");


   revalidatePath("/") 
}
catch(error:unknown){
    if(error instanceof Error)
    return {message:error.message}
else 
    return {message:"some internal server error"}
}
   
    redirect("/")
  }