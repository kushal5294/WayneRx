import { useState, useEffect } from "react";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { darkBlue } from "../../utils/constants";
import { red } from "../../utils/constants";

export const Hero = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 640);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative pt-5 lg:pt-10 -mt-5 lg:mt-4">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* Text section */}
        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                      lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2 z-10"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-bold">
            Welcome to
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: isSmall
                  ? undefined
                  : "linear-gradient(to right, #f74d4d, #175a81)",
                color: isSmall ? red : undefined,
              }}
            >
              Wayne Rx Drugs
            </span>
          </h1>

          <Paragraph className="mt-5">
            You need a pharmacy that does more than filling your prescriptions.
            You deserve a pharmacy that looks out for you. At our pharmacy in
            Wayne, Michigan, we operate with your health as our number one
            priority. Browse the rest of our website to learn how we can help
            you.
          </Paragraph>
        </div>

        {/* Image container with continuous teal glow for all screen sizes */}
        <div className="relative flex flex-1 lg:w-1/2 lg:max-w-none mx-auto max-w-3xl overflow-visible">
          {/* Continuous teal glow behind image */}
          <span
            className="absolute inset-0 rounded-3xl blur-[60px] opacity-40"
            style={{
              background: `radial-gradient(
              circle at center,
              ${darkBlue},
              ${red} 40%,
              ${darkBlue} 70%,
              transparent 100%
            )`,
            }}
          ></span>

          {/* Hero Image on top */}
          <img
            src="/waynerx-storefront.jpeg"
            alt="Wayne Rx Pharmacy Storefront"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none object-[center_35%]  z-20"
          />
        </div>
      </Container>
    </section>
  );
};
