"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  Hero,
  Parallax,
  Players,
  Feedback,
  Footer,
  Discover,
} from "@/container";
import MobileNotification from "@/components/MobileNotification";

export default function Home() {
  const [showMobileNotification, setShowMobileNotification] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMobileNotification(window.innerWidth <= 765);
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);
    // Initial check
    handleResize();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showMobileNotification && <MobileNotification />}
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
