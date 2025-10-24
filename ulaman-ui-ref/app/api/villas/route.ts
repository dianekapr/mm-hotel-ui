import { NextResponse } from 'next/server';

export async function GET() {
  const villas = [
    {
      id: 1,
      name: 'Floating Lake Villa',
      description: 'A luxurious floating villa overlooking Ulaman’s eco-friendly lake, perfect for a serene retreat.',
      imageUrl: ['/images/floating-lake.jpg', '/images/floating-lake.jpg', '/images/floating-lake.jpg'],
    },
    {
      id: 2,
      name: 'Cocoon Jungle Villa',
      description: 'An intimate and cozy hideaway surrounded by lush jungle, offering a perfect harmony with nature.',
      imageUrl: ['/images/cocoon-jungle.jpg', '/images/floating-lake.jpg', '/images/floating-lake.jpg'],
    },
//...
  ];

  return NextResponse.json(villas);
}
