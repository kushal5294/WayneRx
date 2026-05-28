import { Helmet } from "react-helmet-async";
import { Container } from "../components/shared/Container";
import { Paragraph } from "../components/shared/Paragraph";
import { Banner } from "../components/elements/Banner";
import { DeliveryForm } from "../components/forms/DeliveryForm";
import { darkBlue } from "../utils/constants";

export const Delivery = () => {
  return (
    <>
      <Helmet>
        <title>Delivery Services - Wayne Rx Drugs</title>
        <meta
          name="description"
          content="Get your medications delivered to your doorstep. Wayne Rx offers convenient and reliable prescription delivery services."
        />
      </Helmet>
      <Banner text="Delivery Services" />
      <section id="services" className="mb-13 mt-15">
        <Container className="space-y-10 md:space-y-12 -mt-4">
          <div className="text-center mx-auto space-y-4">
            <Paragraph>
              Don’t have the time to personally pick up your medicines? Not a
              problem! For your convenience,{" "}
              <span style={{ color: darkBlue }} className="font-bold">
                Wayne Rx Drugs
              </span>{" "}
              can deliver your medications directly to your doorstep. To get
              started, please fill out the form provided.
            </Paragraph>
          </div>
        </Container>
      </section>
      <DeliveryForm />
    </>
  );
};
