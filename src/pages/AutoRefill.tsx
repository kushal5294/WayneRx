import { Helmet } from "react-helmet-async";
import { Container } from "../components/shared/Container";
import { Paragraph } from "../components/shared/Paragraph";
import { Banner } from "../components/elements/Banner";
import { AutoRefillForm } from "../components/forms/AutoRefillForm";
import { darkBlue } from "../utils/constants";

export const AutoRefill = () => {
  return (
    <>
      <Helmet>
        <title>Auto Refills - Wayne Rx Drugs</title>
        <meta
          name="description"
          content="Set up automatic prescription refills at Wayne Rx Drugs in Wayne, Michigan. Save time and avoid multiple trips to the pharmacy with our convenient auto-refill service."
        />
      </Helmet>
      <Banner text="Auto Refills" />
      <section id="services" className="mb-13 mt-15">
        <Container className="space-y-10 md:space-y-12 -mt-4">
          <div className="text-center mx-auto space-y-4">
            <Paragraph>
              With{" "}
              <span style={{ color: darkBlue }} className="font-bold">
                Wayne Rx Drugs
              </span>
              , you can easily have all of your prescriptions refilled at a
              particular time each month. This way, you will no longer have to
              make multiple trips to the pharmacy. Kindly fill out the form
              below to take advantage of this service.
            </Paragraph>
          </div>
        </Container>
      </section>
      <AutoRefillForm />
    </>
  );
};
