import { currentUser } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export const POST = async(req:NextRequest)=>{
   
     const user = await currentUser()

     
}