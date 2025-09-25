import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: 'Mini Blog App',
    author: 'Anshu K. Thakur | Intern',
  });
}