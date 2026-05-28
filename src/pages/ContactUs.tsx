import { Helmet } from "react-helmet-async";
import { Container } from "../components/shared/Container";
import { Paragraph } from "../components/shared/Paragraph";
import { Banner } from "../components/elements/Banner";
import { ContactForm } from "../components/forms/ContactForm";
import { darkBlue } from "../utils/constants";

export const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Wayne Rx Drugs</title>
        <meta
          name="description"
          content="Get in touch with Wayne Rx in Wayne, Michigan. Find our address, phone number, and a contact form to send us a message for any questions or concerns."
        />
      </Helmet>
      <Banner text="Contact Us" />
      <section id="services" className="mb-13 mt-15">
        <Container className="space-y-10 md:space-y-12 -mt-4">
          <div className="text-center mx-auto space-y-4">
            <Paragraph>
              <span style={{ color: darkBlue }} className="font-bold">
                Wayne Rx Drugs
              </span>{" "}
              cares about you. If you have any questions, concerns, or
              suggestions, we encourage you to send us a message using the form
              provided. One of our representatives will get back to you as soon
              as possible.
            </Paragraph>
          </div>
        </Container>
      </section>
      <ContactForm />
    </>
  );
};
