import { NextResponse } from "next/server";

import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = process.env.HF_TOKEN; // Store token securely in environment variables

export async function POST(request) {
  const { text } = await request.json();
  // console.log(text);
  try {
    const client = new InferenceClient(HF_TOKEN);

    const chatCompletion = await client.chatCompletion({
      provider: "novita",
      model: "deepseek-ai/DeepSeek-V3-0324",
      messages: [
        {
          role: "user",
          content: text,
        },
      ],
    });

    // console.log(chatCompletion.choices[0].message);
    return NextResponse.json(chatCompletion.choices[0].message);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: `Internal Error while generating AI response.`,
    });
  }
}
