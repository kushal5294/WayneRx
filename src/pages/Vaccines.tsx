import { Helmet } from "react-helmet-async";
import { Banner } from "../components/elements/Banner";
import { VaccineInfo } from "../components/sections/VaccineInfo";
export const Vaccines = () => {
  return (
    <>
      <Helmet>
        <title>Vaccines - Wayne Rx Drugs</title>
        <meta
          name="description"
          content="Learn about how you can get safely vaccinated in Wayne, MI."
        />
      </Helmet>
      <Banner text="Vaccines" />
      <VaccineInfo />
    </>
  );
};
