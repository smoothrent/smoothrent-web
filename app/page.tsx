import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Join from "@/components/Home/Join";
import Looking from "@/components/Home/Looking";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Looking />
      <Join />
    </div>
  );
}
