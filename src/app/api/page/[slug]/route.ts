// app/api/page/[slug]/route.ts
import PAGES from '@/dummyData/pageData';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const page = PAGES[slug as keyof typeof PAGES];

  if (!page) {
    return NextResponse.json(
      { message: 'Not Found', status: 404 },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: 'Success', status: 200, data: page });
}
