import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req:NextRequest)=>{
   
     const user = await currentUser()

     if(!user){
          return NextResponse.json({error: 'Unauthorized'}, {status: 401})
     }

     const email = user.primaryEmailAddress?.emailAddress;
  
       if (!email) {
           return NextResponse.json(
             { error: "User missing primary email" }, 
                 { status: 400 }
             );
       }

       const name = user.fullName ?? "";

       const dbUser = await prisma.user.upsert({
          where: { email },
           update: {}, 
           create: {
            email,
            name,
           },
       });
     
      return NextResponse.json({user:dbUser}, {status: 200})
     
}