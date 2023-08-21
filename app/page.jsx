import {
  Navbar,
  Hero,
  Parallax,
  Players,
  Feedback,
  Footer,
  Discover,
} from "@/container";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-white h-[200vh]s w-full overflow-hidden">
        <Parallax />
      </div>
      <Discover />
      <Players />
      <Feedback />
      <Footer />
    </>
  );
}
