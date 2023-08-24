"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";

const stars = ["/star.svg", "/star.svg", "/star.svg", "/star.svg", "/star.svg"];

const Feedback = ({ totalReviews }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const newIndex = startIndex + 1;
    setStartIndex(newIndex >= totalReviews.length ? 0 : newIndex);
  };

  const handlePrevious = () => {
    const newIndex = startIndex - 1;
    setStartIndex(newIndex < 0 ? totalReviews.length - 2 : newIndex);
  };

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
    <div className=" h-screen w-full px-5" id="feedBack">
      <div className="flex items-center justify-center gap-5">
        <motion.div
          whileHover={{ scaleX: 0.95, scaleY: 0.97 }}
          className="bg-[url(/bg.webp)] flex-col items-center justify-evenly p-10 h-[90vh] w-[90%] rounded-[2rem] hidden lg:flex"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-5xl text-white font-semibold">Clutch</h2>
            <div className="flex items-center gap-1">
              {stars.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  width={30}
                  height={30}
                  alt="stars-icons"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Button className="bg-white text-black font-medium rounded-full">
              Go to clutch
            </Button>
            <div className="flex items-center gap-3 bg-white rounded-full py-2 px-4 text-black">
              <Image src="/main.svg" width={23} height={23} alt="icon" />
              <p className="text-lg">{totalReviews.length} reviews</p>
            </div>
          </div>
        </motion.div>
        {showMobileNotification ? (
          <>
            {totalReviews
              .slice(startIndex, startIndex + 1)
              .map((review, index) => (
                <motion.div
                  whileHover={{ scaleX: 0.95, scaleY: 0.97 }}
                  key={index}
                  className="bg-[#e3e8ea] flex flex-col items-start justify-between p-10 h-[90vh] w-[90%] rounded-[2rem]"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.rating}
                      width={23}
                      height={23}
                      alt="icon"
                    />
                    <div className="flex items-center gap-1">
                      {review.star.map((imgUrl, index) => (
                        <Image
                          src={imgUrl.image}
                          width={20}
                          height={20}
                          key={index}
                          alt={`stars ${index}`}
                        />
                      ))}
                      <p className="font-semibold ml-">5.0</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10">
                    <p className="review-paragraph text-xl leading-relaxed">
                      {review.paragraph}
                    </p>
                    <p className="review-text font-semibold">
                      CEO at {review.author}
                    </p>
                  </div>
                </motion.div>
              ))}
          </>
        ) : (
          <>
            {totalReviews
              .slice(startIndex, startIndex + 2)
              .map((review, index) => (
                <motion.div
                  whileHover={{ scaleX: 0.95, scaleY: 0.97 }}
                  key={index}
                  className="bg-[#e3e8ea] flex flex-col items-start justify-between p-10 h-[90vh] w-[90%] rounded-[2rem]"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.rating}
                      width={23}
                      height={23}
                      alt="icon"
                    />
                    <div className="flex items-center gap-1">
                      {review.star.map((imgUrl, index) => (
                        <Image
                          src={imgUrl.image}
                          width={20}
                          height={20}
                          key={index}
                          alt={`stars ${index}`}
                        />
                      ))}
                      <p className="font-semibold ml-">5.0</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10">
                    <p className="review-paragraph text-xl leading-relaxed">
                      {review.paragraph}
                    </p>
                    <p className="review-text font-semibold">
                      CEO at {review.author}
                    </p>
                  </div>
                </motion.div>
              ))}
          </>
        )}
      </div>

      <div className="flex items-center justify-center gap-3 mt-7">
        <div
          className="bg-white border-1 border-gray-500 rounded-full p-3 cursor-pointer hover:bg-black hover:text-white hover:border-white transition-all"
          onClick={handlePrevious}
        >
          <AiOutlineArrowLeft />
        </div>
        <div
          className="bg-white border-1 border-gray-500 rounded-full p-3 cursor-pointer hover:bg-black hover:text-white hover:border-white transition-all"
          onClick={handleNext}
        >
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
