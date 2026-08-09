// app/api/feedback/route.ts
import { NextResponse } from "next/server";

interface FeedbackPayload {
  message: string;
  email?: string;
  rating?: number;
  category?: string;
}

export async function POST(request: Request) {
  try {
    const data: FeedbackPayload = await request.json();
    const { message, email, rating, category } = data;

    // 1. Validate required message field
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Feedback message cannot be empty.",
        },
        { status: 400 }
      );
    }

    const cleanMessage = message.trim();

    // 2. Prevent excessively long payloads
    if (cleanMessage.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          message: "Feedback message must be under 2,000 characters.",
        },
        { status: 400 }
      );
    }

    // 3. Process validated payload
    console.log("Feedback Received:", {
      message: cleanMessage,
      email: email?.trim().toLowerCase() || "Anonymous",
      rating: rating || "Not provided",
      category: category || "General",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your feedback has been received.",
    });
  } catch (error) {
    console.error("Feedback API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
