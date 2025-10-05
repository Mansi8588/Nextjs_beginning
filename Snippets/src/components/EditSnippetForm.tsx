"use client";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {saveSnippet} from "@/actions";


const message={

}



export default function EditSnippetForm({ snippet }: { snippet: Snippet }) {
  const [code, setCode] = useState(snippet.code);

  const changeEvenHandler=(value:string="")=>{
setCode(value)

  }


const saveSnippetAction= saveSnippet.bind(null,snippet.id,code)


  return (
    <div className="flex flex-col gap-4">

    <form action={saveSnippetAction} className="flex items-center justify-between ">
      <h1 className="font-bold text-xl">Your Code Editor:</h1>
      <Button type="submit">Save</Button>
      </form>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={code}
        onChange={changeEvenHandler}
        />
        </div>
  );
}
