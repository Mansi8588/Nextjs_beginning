import React from 'react'
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as actions from '@/actions'
import { notFound } from 'next/navigation';

type SnipppetDetailsProps={
    params:Promise<{id:string}>
}

// const SnippetDetailPage = async ({params}:{params:Promise<{id:string}>})=>{
   
//     const id=(await params).id;

//     return (
//     <div>
// <h1>{id}</h1>
//     </div>
//   )
// } 



const SnippetDetailPage:React.FC<SnipppetDetailsProps>= async ({params})=>{
    const id=parseInt((await params).id);

    await new Promise((resolve)=>setTimeout(resolve,1000))
    const snippet=await prisma.snippet.findUnique({
        where:{
            id,
        },
    })


    if(!snippet){
        notFound()
    }


    const deteteSnippetAction=actions.deleteSnippet.bind(null,snippet.id)

    return (
    <div>
        <div className='flex items-center justify-between '>

            <h1 className='font-bold text-xl'>{snippet.title}</h1>
            <div className='flex items-center gap-2'>
                <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
            </Link>
            <form action={deteteSnippetAction}>

            <Button variant={'destructive'} type='submit'>Delete</Button>
            </form>
            </div>
        </div>
        <pre className='p-3 bg-gray-200 rounded border-gray-200'>

            <code>

                {snippet.code}
            </code>
        </pre>
    </div>
    );
}

export default SnippetDetailPage

// dynamic route to static route
// but if i edit the snippet after build time it will not reflect
// changes occure in database but not update in static page
// update chaching ondemand
export const generateStaticParams=async()=>{
       const snippets=await prisma.snippet.findMany(); 
       return snippets.map((snippet)=>
        ({id:snippet.id.toString()}
    ))
} 