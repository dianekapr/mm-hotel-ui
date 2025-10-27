"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type ActImages = {
  id: string;
  images: string[];
  interval: number;
};

type Props = {
  images: string[];
  interval: number;
};


const ImgActivity = ({ images, interval }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Experience image"
            fill
            className="object-cover rounded-xl"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const fetchFadeImg = async () => {
  return [
    {
      id: "1",
      images: [
      "https://images.prismic.io/ulaman/Zlas5KWtHYXtT4Cm_yoga-in-bali.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZlbYjKWtHYXtT4MP_bathflower.jpg?auto=format,compress"
      ],
      interval: 3000,
    },
    {
      id: "2",
      images: [
      "https://images.prismic.io/ulaman/Z5mgK5bqstJ99-Jc_DSC09345.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/Z5mbQZbqstJ99-Iv_Ulamanchef-42-2-.jpg?auto=format,compress"
      ],
      interval: 3000,
    },
    {
      id: "3",
      images: [
      "https://images.prismic.io/ulaman/ZiR1p_Pdc1huKqBs_sound-healing-bali.jpg?auto=format,compress",
      "https://images.prismic.io/ulaman/ZoZc3h5LeNNTwyC-_luxury-resort-bali.jpg?auto=format,compress"
      ],
      interval: 3000,
    },
    {
      id: "4",
      images: [
        "https://images.prismic.io/ulaman/ZpTFzx5LeNNTxJWM_PREWEDDING-1.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/Zla9p6WtHYXtT4EA_ulaman.jpg?auto=format,compress"
      ],
      interval: 3000,
    },
    {
      id: "5",
      images: [
        "https://images.prismic.io/ulaman/Z5ibs5bqstJ997Bg_DSC09379.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZnWOMpbWFbowew-3_eco-reosrt.jpg?auto=format,compress"
      ],
      interval: 3000,
    },
    {
      id: "6",
      images: [
        "https://images.prismic.io/ulaman/ZlbB0KWtHYXtT4Fc_bali-hotels.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZpIRih5LeNNTxIQ__weddings-bali.jpg?auto=format,compress"
           ],
      interval: 3000,
    },
  ];
};

export default function Activities() {
  const [items, setItems] = useState<ActImages[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFadeImg()
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-black text-center py-10">{loading}</p>;
  if (error) return <p className="text-red-500 text-center py-10">{error}</p>;

  return (
    <section className=" py-20 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[100px] md:auto-rows-[250px]">
        <div className="row-span-3 md:row-span-2">
          <ImgActivity
            images={items[0].images}
            interval={items[0].interval}
          />
        </div>

        <div className="row-span-2 md:row-span-1">
          <ImgActivity
            images={items[1].images}
            interval={items[1].interval}
          />
        </div>

        <div className=" row-span-3 md:row-span-2">
          <ImgActivity
            images={items[3].images}
            interval={items[3].interval}
          />
        </div>

        <div className=" row-span-3 md:row-span-2">
          <ImgActivity
            images={items[4].images}
            interval={items[4].interval}
          />
        </div>

        <div className=" row-span-3 md:row-span-1">
          <ImgActivity
            images={items[5].images}
            interval={items[5].interval}
          />
        </div>
        <div className="row-span-2 md:row-span-1">
          <ImgActivity
            images={items[2].images}
            interval={items[2].interval}
          />
        </div>
      </div>
      <div className="flex w-full">
        <Link href="#" className="mx-auto mt-4">
          <Link
            href="#"
            className="inline-block text-sm text-gold font-medium border-b border-gold transition-all duration-300 hover:border-transparent pb-[2px]"
          >
            Discover All Experiences
          </Link>
        </Link>
      </div>
    </section>
  );
}
