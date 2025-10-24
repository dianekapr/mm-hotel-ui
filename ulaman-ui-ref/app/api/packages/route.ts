import { NextResponse } from 'next/server';

export async function GET() {
  const packages = [
    {
      id: 1,
      name: 'The Avatar Experience',
      duration: '3 Days / 2 Nights',
      description:
        'Experience sustainable luxury in a sky villa with breathtaking 180° jungle and river views. Includes spa rituals, yoga, and organic meals.',
      imageUrl: '/images/avatar-experience.jpg',
    },
    {
      id: 2,
      name: 'The Ultimate Honeymoon',
      duration: '3 Days / 2 Nights',
      description:
        'A romantic eco-luxury escape designed for couples, featuring candlelight dinners, couple’s spa sessions, and private villa stays.',
      imageUrl: '/images/ultimate-honeymoon.jpg',
    }
  ];

  return NextResponse.json(packages);
}
