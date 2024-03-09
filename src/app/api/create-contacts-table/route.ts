import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result = await sql`
      CREATE TABLE IF NOT EXISTS Contacts (
        id SERIAL PRIMARY KEY,
        Name VARCHAR(255) NOT NULL,
        Email VARCHAR(255) NOT NULL,
        Message TEXT NOT NULL
      );
    `;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error('Error creating table:', error);
    return NextResponse.json({ error: 'Error creating table' }, { status: 500 });
  }
}