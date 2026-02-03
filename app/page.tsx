// app/page.tsx (Next.js 13+ with /app directory)
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import BackToTop from "./components/backToTop";
import AboutMe from "./pages/about-me/page";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <SpeedInsights />
    </>
  );
}
