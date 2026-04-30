import HeroSection from "@/components/homepages/HeroSection ";
import PopularProducts from "@/components/homepages/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HeroSection></HeroSection>
    <PopularProducts></PopularProducts>
   </div>
  );
}
