import { Helmet } from "react-helmet-async";
import { Container } from "../components/shared/Container";
import { Paragraph } from "../components/shared/Paragraph";
import { Banner } from "../components/elements/Banner";
import { darkBlue } from "../utils/constants";
import TransferForm from "../components/forms/TransferForm";

export const Transfer = () => {
  return (
    <>
      <Helmet>
        <title>Transfer Prescription - Wayne Rx Drugs</title>
        <meta
          name="description"
          content="Easily transfer your prescription to Wayne Rx Drugs in Wayne, Michigan from another pharmacy. Fill out our simple form and we'll handle the rest."
        />
      </Helmet>
      <Banner text="Transfer Prescription" />
      <section id="services" className="mb-13 mt-15">
        <Container className="space-y-10 md:space-y-12 -mt-4">
          <div className="text-center mx-auto space-y-4">
            <Paragraph>
              Want to transfer your prescription from another pharmacy to{" "}
              <span style={{ color: darkBlue }} className="font-bold">
                Wayne Rx Drugs
              </span>
              ? All you will need to do is to request for a transfer of your
              prescriptions by filling out the form provided. We will take care
              of the rest.
            </Paragraph>
          </div>
        </Container>
      </section>
      <TransferForm />
    </>
  );
};
