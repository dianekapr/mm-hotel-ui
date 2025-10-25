import { NextResponse } from 'next/server';

export async function GET() {
  const activities = [
    {
      id: 1,
      name: 'Private Yoga Session',
      description: ['Enjoy a private yoga session designed for you, Hatha for strength, or Yin for deep relaxation. For a unique twist, try Fly High Yoga with aerial support to enhance stretches and core strength.'],
      price: ['IDR 1.000.000++ / Pax', `IDR 1.500.000++ / Pax`],
      imageUrl: '/images/private-yoga.jpg',
      addInfo: 'Duration: 60 minutes'
    },
    {
      id: 2,
      name: 'Waterfall Dining',
      description: [`The Waterfall Deck offers an exclusive and intimate dining experience set in front of a magical natural waterfall.`, 'The Waterfall Deck offers an exclusive and intimate dining experience set in front of a magical natural waterfall. Traditionally inspired with handmade Balinese ornaments, flowers, and candles, and featuring personalized service, it creates an unparalleled and enchanting atmosphere, making it the perfect venue for romantic dinners and special occasions.'],
      price: ['Starting from IDR 350.000++ / Pax'],
      imageUrl: '/images/waterfall-dining.jpg',
      addInfo: `A romantic 5-star culinary experience with a 4-Course Chef's Selection menu right in front of natural waterfalls, beautifully decorated with local flowers, palm leaf arches, and umbrellas.`
    }
  ];

  return NextResponse.json(activities);
}
