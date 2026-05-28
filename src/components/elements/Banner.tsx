import React from "react";

interface BannerProps {
  text: string;
}

export const Banner: React.FC<BannerProps> = ({ text }) => {
  return (
    <div
      className="relative w-full h-35 bg-cover bg-top flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/logos/banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-3xl font-semibold ">
        {text}
      </div>
    </div>
  );
};
