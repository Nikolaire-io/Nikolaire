import Footer from "@/components/Footer/footer";
import Hero from "@/components/Hero/Hero";
import TeamGrid from "@/components/Our Team/team-grid";
import WhoWeArePage from "@/components/Who_We_Are/WhoWeAre";

export default function Home() {
  return (
    <main className="lg:pt-0 pt-[76px] ">
      <Hero />
      <WhoWeArePage />
      <TeamGrid/>
      <Footer />
    </main>
  );
}
