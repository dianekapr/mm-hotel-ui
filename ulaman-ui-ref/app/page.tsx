export const dynamic = "force-dynamic";

// import Banner from "@/components/banner";
// import SliderReview from "@/components/custReview";
// import DetailInfo from "@/components/detailInfo";
// import FeaturedProducts from "@/components/featuredProduct";

export default function Home() {
  return (
    <div className="bg-[#D8E2DC] text-black">
      <section className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </section>

      {/* <DetailInfo />

      <SliderReview />

      <FeaturedProducts /> */}

      <div className="py-6">
        {/* <Banner /> */}
      </div>

      {/* <LayerSection /> */}
    </div>
  );
}
