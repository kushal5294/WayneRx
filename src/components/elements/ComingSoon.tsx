import React from "react";
import { darkBlue } from "../../utils/constants";

export const ComingSoon: React.FC = () => {
  const text = "🎉 Now Open 🎉";

  return (
    <>
      <div
        className="relative bg-red-600 text-white overflow-hidden py-3 mb-6"
        style={{ backgroundColor: darkBlue }}
      >
        <div className="flex animate-scroll-left whitespace-nowrap">
          {/* First set */}
          {[...Array(50)].map((_, i) => (
            <span
              key={`first-${i}`}
              className="inline-block font-bold text-lg uppercase px-8 lg:px-16"
            >
              {text}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {[...Array(50)].map((_, i) => (
            <span
              key={`second-${i}`}
              className="inline-block font-bold text-lg uppercase px-16"
            >
              {text}
            </span>
          ))}
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
        
        .animate-scroll-left {
          animation: scroll-left 900s linear infinite;
          display: inline-flex;
        }
      `}</style>
      </div>
    </>
  );
};

export default ComingSoon;
