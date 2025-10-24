import { NextResponse } from 'next/server';

export async function GET() {
  const experiences = [
    {
      id: 1,
      name: 'Private Yoga Session',
      description:
        'Rebalance your body and mind through a personalized yoga session guided by our in-house instructor amidst lush jungle views.',
      price: 'IDR 1.000.000++ / Pax',
      imageUrl: '/images/private-yoga.jpg',
    },
    {
      id: 2,
      name: 'Waterfall Dining',
      description:
        'An exclusive candlelight dining experience set right in front of a natural waterfall — a perfect blend of romance and nature.',
      price: 'Starting from IDR 350.000++ / Couple',
      imageUrl: '/images/waterfall-dining.jpg',
    }
  ];

  return NextResponse.json(experiences);
}
