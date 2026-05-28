import { BtnLink } from "../shared/BtnLink";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { darkBlue } from "../../utils/constants";
import { red } from "../../utils/constants";

export const AboutUsComp = () => {
  return (
    <section id="about-us">
      {" "}
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center -mb-4">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
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
            <img
              src="https://t3.ftcdn.net/jpg/03/46/13/66/360_F_346136609_CY4flRGvi4dA9el5T1Wrq3nuBUYuyWm1.jpg"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              alt="Image of a happy family."
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col space-y-4 text-center md:text-left">
          <Title> Mission Statement </Title>
          <Paragraph>
            Our mission is to improve our clients’ overall quality of health and
            wellness by encouraging the proper effective use of medications
            through exceptional products and services.
          </Paragraph>

          <div className="pt-4 md:pt-8 flex justify-center lg:justify-start gap-4">
            <BtnLink href="/about-us" text="About Us" />
            <BtnLink href="/contact-us" text="Contact Us" />
          </div>
        </div>
      </Container>
    </section>
  );
};
