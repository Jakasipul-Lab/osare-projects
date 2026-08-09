// app/api/newsletter/route.ts
import { NextResponse } from "next/server";

// Email validation helper using standard Regex pattern
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return typeof email === "string" && emailRegex.test(email.trim());
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email } = data;

    // 1. Check if email is missing or empty
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email address is required.",
        },
        { status: 400 }
      );
    }

    // 2. Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // 3. Log valid email (replace with DB or newsletter provider like Mailchimp/Resend)
    console.log("Valid Newsletter Subscription:", cleanEmail);

    return NextResponse.json({
      success: true,
      message: "Subscription received successfully!",
    });
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
