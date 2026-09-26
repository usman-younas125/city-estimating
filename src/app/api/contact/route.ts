import { NextResponse } from "next/server";
import { company } from "@/lib/data";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
};

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254);
  const phone = clean(body.phone, 30);
  const message = clean(body.message, 2000);

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Please fill in all fields." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    const formData = new FormData();
    formData.append("access_key", company.web3formsAccessKey);
    formData.append("subject", "New Estimate Request from City Estimating");
    formData.append("from_name", "City Estimating Website");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!result.success) {
      console.error("Web3Forms error:", result);
      return NextResponse.json(
        { error: result.message || "Could not send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 }
    );
  }
}
