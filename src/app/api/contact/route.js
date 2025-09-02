import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    await connectDB();
    await Contact.create({ name, email, subject, message });

    return new Response(
      JSON.stringify({ message: "Message stored successfully ✅" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("DB error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to store message ❌" }),
      { status: 500 }
    );
  }
}
