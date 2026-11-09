import {GoogleGenerativeAI} from '@google/generative-ai'
import { NextResponse } from "next/server";

const googleGeminiApiKey = process.env.GOOGLE_GEMINI_API_KEY as string;

const model = 'gemini-2.0-flash'



export const POST = async(req:Request)=>{

      try {

        const data = await req.json()
        const prompt = data.prompt
        if(!prompt){
            return NextResponse.json({success: false, error:'missing prompt'}, {status: 400})
        }

        const generativeAi = new GoogleGenerativeAI({})
        
      } catch (error: unknown) {
        console.log('error: ' +error)
          return NextResponse.json(
               { success: false, error: 'Failed to Generate exercise content' },
               { status: 500 })
      }
}