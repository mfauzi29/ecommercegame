import Hero from "./components/Hero";
import Image from "next/image";
import Newest from "./components/Newest";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Image src={""} alt={""} />
      <Newest />
    </div>
  );
}
