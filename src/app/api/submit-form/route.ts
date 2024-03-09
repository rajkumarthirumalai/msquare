import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Insert the form data into the database
    await sql`
      INSERT INTO Contacts (Name, Email, Message)
      VALUES (${name}, ${email}, ${message})
    `;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ success: false, error: 'Error submitting form' }, { status: 500 });
  }
}