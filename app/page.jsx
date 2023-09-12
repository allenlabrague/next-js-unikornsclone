"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  Hero,
  Parallax,
  Testimonials,
  Feedback,
  Footer,
  Gallery,
  Project,
} from "@/container";
import MobileNotification from "@/components/MobileNotification";
import { totalReviews } from "@/constants";
import InfiniteTextMove from "@/components/InfiniteTextMove";
import SmoothScroll from "@/components/SmoothScrolling";

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
      <SmoothScroll>
        {showMobileNotification && <MobileNotification />}
        <Navbar />
        <Hero />
        <Parallax />
        <Project />
        <Gallery />
        <Testimonials />
        <Feedback totalReviews={totalReviews} />
        <InfiniteTextMove />
        <Footer />
      </SmoothScroll>
    </>
  );
}
