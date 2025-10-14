import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import {prisma} from "@/lib"



if(!process.env.GITHUB_CLIENT_ID || !process.env.GITHUBCLIENT_SECRET)
{
    throw new Error("GitHub oAuth env variables are not set")
}

export const {handlers:{GET ,POST},auth,signIn,signOut}=NextAuth(
    {
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUBCLIENT_SECRET,
        }),


    ],
    callbacks: {
        async session({session, user}){
            if(session && user){
                session.user.id=user.id;
            }
            return session;
        }
    }
})


