import Image from "next/image";
import { Button } from "@/components/ui/button";
import  Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {

const snippets =await prisma.snippet.findMany();


  return (
    <div >
    <h1 className="font-bold text-4xl">Home</h1>
    <div className="flex items-center justify-between"> 
      <h1>Snippets</h1>
      <Link href={"/snippet/new"}>
      
<Button>New</Button>
      </Link>
    </div>

    {
      snippets.map((snippet)=>(
        <div key={snippet.id} className="flex items-center justify-between my-4 rounded-md bg-gray-200">
          <h2 className="font-bold text-2xl">{snippet.title}</h2>
          <Link href={`/snippet/${snippet.id}`}>
          <Button variant={'link'}>View </Button>
          </Link>
        </div>
      ))
    }
    </div>
  );
}
