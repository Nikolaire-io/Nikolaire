import Hero from "@/components/Hero/Hero";
import WhoWeArePage from "@/components/Who_We_Are/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeArePage />
    </main>
  );
}
