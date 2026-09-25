import { Hero } from "@/components/Hero";
import { BookServices } from "@/components/BookServices";
import { Brands } from "@/components/Brands";
import { AboutPreview } from "@/components/AboutPreview";
import { Expertise } from "@/components/Expertise";
import { WhyChoose } from "@/components/WhyChoose";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Trades } from "@/components/Trades";
import { Technology } from "@/components/Technology";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <BookServices />
      <Brands />
      <AboutPreview />
      <Expertise />
      <WhyChoose />
      <Features />
      <Stats />
      <Trades />
      <Technology />
      <Testimonials />
    </>
  );
}
