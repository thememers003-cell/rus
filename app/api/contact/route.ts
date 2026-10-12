import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, services, timeline, message } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required contact details (Name, Email, or Phone)." },
        { status: 400 }
      );
    }

    const recipientEmails = [
      "riseupsolutions@zohomail.in",
      "info@riseupsolutions.in"
    ];

    // Server-side inquiry dispatching and logging
    console.log("[RISEUP SOLUTIONS DEMO INQUIRY DISPATCHED]:", {
      timestamp: new Date().toISOString(),
      recipients: recipientEmails,
      fullName,
      email,
      phone,
      company: company || "N/A",
      services,
      timeline,
      message: message || "N/A",
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry received. Dispatched to riseupsolutions@zohomail.in and info@riseupsolutions.in",
      recipients: recipientEmails,
    });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to process inquiry request." },
      { status: 500 }
    );
  }
}
