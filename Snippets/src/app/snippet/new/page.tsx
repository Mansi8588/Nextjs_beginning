"use client"
import React, { useActionState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import * as actions from '@/actions'


const CreateSnippetPage = () => {

  const [formStateData,xyz]=useActionState(actions.createSnippet,{message:""});


  // async function createSnippet(formData: FormData) {
  //   "use server"
  //   const title = formData.get("title") as string
  //   const code = formData.get("code") as string

  //   const snippet = await prisma.snippet.create({
  //     data: {
  //       title,
  //       code,
  //     },
  //   })

  //   console.log(snippet)
  //   redirect("/")
  // }

  return (
    <form action={xyz} >
      <div>
        <Label htmlFor="title">Title</Label>
        <Input type='text' name="title" id="title" required />
      </div>

      <div className='my-4'>
        <Label htmlFor="code">Code</Label>
        <Textarea name='code' id='code' required />
      </div>
      {formStateData.message &&
<div className='p-2 bg-red300 border-2 borderred-600'>{formStateData.message}</div>} 
      <Button className='my-4' type='submit'>New</Button>
    </form>
  )
}

export default CreateSnippetPage
