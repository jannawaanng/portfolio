// app/page.tsx (Next.js 13+ with /app directory)
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import BackToTop from "./components/backToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}
