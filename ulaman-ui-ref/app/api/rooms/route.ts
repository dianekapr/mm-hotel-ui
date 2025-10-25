import { NextResponse } from 'next/server';

export async function GET() {
  const rooms = [
    {
      id: 1,
      name: 'Floating Lake Villa',
      avail: '5 Units Available',
      size: `52m²`,
      roomType: [`Sleeps 3 (With sofa bed)`, 'King sized bed'],
      description: `Set above Bali's only bio-filtered, koi-filled lake, Ulaman's Floating Lake Villas offer a serene and luxurious experience unlike any other. Each villa features a private floating deck and a sunken round hammock, thoughtfully designed for couples—perfect for stargazing or feeding the koi below. Seamlessly blending modern tropical elegance with natural elements, the villas include a sun deck patio, hanging net, and a handcrafted teakwood bathtub.`,
      imageUrl: ['/images/floating-lake.jpg', '/images/floating-lake.jpg', '/images/floating-lake.jpg'],
    },
    {
      id: 2,
      name: 'Cocoon Jungle Villa',
      avail: '3 Units Available',
      size: `72m²`,
      roomType: [`Sleeps 2`, 'King sized bed'],
      description: 'Elevated among the treetops, the Cocoon Jungle Villa is a bamboo-woven sanctuary featuring a black bamboo bathroom and a spacious private balcony—perfect for romantic breakfasts overlooking the jungle, garden, and pool. These elegantly designed, cocoon-like villas offer bamboo floors, the largest private balcony among all room types, and the most refined ensuite bathroom at Ulaman.',
      imageUrl: ['/images/cocoon-jungle.jpg', '/images/floating-lake.jpg', '/images/floating-lake.jpg'],
    },
    {
      id: 3,
      name: 'Avatar Tree House',
      avail: '4 Units Available',
      size: `64m²`,
      roomType: [`Sleeps 3`, 'King sized bed'],
      description: `Elevated among the treetops, Ulaman's Avatar Tree House Villas offer a truly unique sanctuary, surrounded by breathtaking rice field views and lush jungle landscapes. Perched 9 meters above ground and accessed via a striking bamboo-woven tunnel, these villas immerse guests in a seamless blend of architectural elegance and natural serenity.`,
      imageUrl: ['/images/cocoon-jungle.jpg', '/images/floating-lake.jpg', '/images/floating-lake.jpg'],
    }
  ];

  return NextResponse.json(rooms);
}
