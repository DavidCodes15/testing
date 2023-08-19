import NextAuth from "next-auth/next";

import  CredentialsProvider  from "next-auth/providers/credentials";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                   label: "სახელი",
                   type: "text",
                   placeholder: "თქვენი სახელი"
                },
                password: {
                    label: "პაროლი",
                    type: "password",
                    placeholder: "პაროლი"
                }

            },
            async authorize(credentials){
                try{
                    await connectToDB();
                    const newUser = new User({
                        username: process.env.USER_NAME,
                        password: process.env.USER_PASSWORD,
                    })
                    await newUser.save();
                    return new Response(JSON.stringify(newUser), {status: 201});
                } catch (error) {
                    console.log(error);
                }
                
                const user = { id: "7", name: process.env.USER_NAME, password: process.env.USER_PASSWORD}
                if(credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                    
                } else{
                    return null;
                }
                
            
            }
        })
    ],
       
    
    
});

export { handler as GET, handler as POST }