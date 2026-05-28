import { Helmet } from "react-helmet-async";
import { Banner } from "../components/elements/Banner";
import { ResourceLinks } from "../components/sections/ResourceLinks";

export const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources - Wayne Rx Drugs</title>
        <meta
          name="description"
          content="Explore useful resources to guide your medical journey in Wayne, Michigan."
        />
      </Helmet>
      <Banner text="Resources" />
      <ResourceLinks />
    </>
  );
};
