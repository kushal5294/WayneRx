import { Helmet } from "react-helmet-async";
import { Banner } from "../components/elements/Banner";
import { FullAboutUs } from "../components/sections/FullAboutUs";

export const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Wayne Rx Drugs</title>
        <meta
          name="description"
          content="Learn more about Wayne Rx Drugs, our history, and our commitment to providing the best pharmacy services in Wayne, Michigan."
        />
      </Helmet>
      <Banner text="About Us" />
      <FullAboutUs />
    </>
  );
};
