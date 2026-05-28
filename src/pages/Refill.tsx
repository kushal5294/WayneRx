import { Helmet } from "react-helmet-async";
import { Container } from "../components/shared/Container";
import { Paragraph } from "../components/shared/Paragraph";
import { Banner } from "../components/elements/Banner";
import RefillForm from "../components/forms/RefillForm";
import { darkBlue } from "../utils/constants";

export const Refill = () => {
  return (
    <>
      <Helmet>
        <title>Refill Prescription - Wayne Rx Pharmacy</title>
        <meta
          name="description"
          content="Quickly and easily refill your prescription online at Wayne Rx in Wayne, Michigan. Fill out our simple form to have your medication ready for you."
        />
      </Helmet>
      <Banner text="Refill Prescription" />
      <section id="services" className="mb-13 mt-15">
        <Container className="space-y-10 md:space-y-12 -mt-4">
          <div className="text-center mx-auto space-y-4">
            <Paragraph>
              Don't worry about running out of a particular prescription. We can
              gladly refill it for you. Just fill out the form below with the
              required information.
            </Paragraph>
          </div>
        </Container>
        <Container className="space-y-10 md:space-y-12 mt-8">
          <div
            style={{ color: darkBlue, borderColor: darkBlue }}
            className="border rounded-lg p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-center">
              Alternative: Register for Rx365 app for instant processing
            </h3>

            <div className="flex justify-center items-center space-x-4 mt-6">
              <a
                href="https://apps.apple.com/us/app/rx365-mobile/id1639398219"
                aria-label="Download on the App Store"
              >
                <img
                  src="/assets/logos/app.png"
                  alt="App Store"
                  className="h-12 w-38"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.libertysoftware.rx365&hl=en_US"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/assets/logos/gp.png"
                  alt="Google Play"
                  className="h-12 w-39"
                />
              </a>
            </div>
          </div>
        </Container>
      </section>
      <RefillForm />
    </>
  );
};
