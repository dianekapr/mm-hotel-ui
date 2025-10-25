import { NextResponse } from 'next/server';

export async function GET() {
  const packages = [
    {
      id: 1,
      name: 'The Avatar Experience',
      duration: '3 Days / 2 Nights',
      description: 'Experience sustainable luxury in a sky villa with breathtaking 180° jungle and river views. Includes spa rituals, yoga, and organic meals.',
      imageUrl: '/images/avatar-experience.jpg',
      addInfo: [`3D2N stay at Avatar Tree House or Floating Lake`,
        `Courses Chef's Special Selection Lunch or Dinner for Couple`,
        `Nature Trekking or Village Tour for Couple`,
        `Airport Pick Up`
      ],
      price: `IDR 15.000.000++ / Package`
    },
    {
      id: 2,
      name: 'The Ultimate Honeymoon',
      duration: '3 Days / 2 Nights',
      description:`A romantic eco-luxury escape designed for couples, featuring candlelight dinners, couple's spa sessions, and private villa stays.`,
      imageUrl: '/images/ultimate-honeymoon.jpg',
      addInfo: [`3D2N stay at Jungle Garden Pool Villa`,
        `Romantic Dinner with a Glass of Wine / Cocktail`,
        `60-Minute Balinese Massage for Couple`,
        `Flower Bath`,
        `Floating Breakfast in Pool Villa`
      ],
      price: `IDR 15.750.000++ / Package`
    }
  ];

  return NextResponse.json(packages);
}
