import React from "react";
import { darkBlue } from "../../utils/constants";

export const SellingPoint: React.FC = () => {
  const texts = ["Price Match", "Free Delivery"];

  const icons = [
    <img src="/assets/logos/cash.svg" alt="Cash Icon" className="w-8 h-8" />,
    <img
      src="/assets/logos/car-side.svg"
      alt="Car Side Icon"
      className="w-8 h-8"
    />,
  ];

  const contentToScroll = [...Array(25)].map((_, i) => (
    <React.Fragment key={i}>
      <span className="inline-block font-bold text-lg uppercase px-8 lg:px-16">
        {texts[i % 2]}
      </span>
      <span className="inline-flex items-center">{icons[i % 2]}</span>
    </React.Fragment>
  ));

  return (
    <>
      <div
        className="relative left-1/2 -translate-x-1/2 w-screen text-white overflow-hidden py-3 mb-6"
        style={{ backgroundColor: darkBlue }}
      >
        {/* Sizing Element: This invisible element ensures the parent has the correct height */}
        <div className="font-bold text-lg invisible">Price Match</div>

        <div className="absolute top-0 left-0 flex items-center h-full">
          <div className="flex animate-scroll-left-1">
            <div className="flex-shrink-0 flex items-center">
              {contentToScroll}
            </div>
            <div className="flex-shrink-0 flex items-center">
              {contentToScroll}
            </div>
          </div>
        </div>

        <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left-1 {
          animation: scroll-left 300s linear infinite;
        }
      `}</style>
      </div>
    </>
  );
};

export default SellingPoint;
