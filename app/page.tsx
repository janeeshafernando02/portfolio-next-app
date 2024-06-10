import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav
          className=""
          navItems={navItems}
        />
        <Hero />
        <About />
        <Grid />
        <TechStack />
        <RecentProjects />
        <Certifications />
        <Footer />
      </div>
    </main>
  );
}
