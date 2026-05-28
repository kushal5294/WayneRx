import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { Link } from "react-router-dom";
import { phone, neutralBlue, darkBlue } from "../../utils/constants";

export const FullAboutUs = () => {
  return (
    <section id="services" className="mb-13 mt-8">
      <Container className="space-y-10 md:space-y-12 -mt-4">
        <div className="p-6 rounded-xl text-center mx-auto space-y-4">
          <Title>
            Find out more about our pharmacy, what we believe in, and how we
            help those we serve.
          </Title>
        </div>

        <Container className="flex flex-col md:flex-row md:items-stretch gap-10 lg:gap-12 -mt-7">
          {/* Left side */}
          <div className="w-full md:w-1/3 flex">
            <div
              style={{ backgroundColor: neutralBlue }}
              className="text-white p-8 rounded-2xl shadow-lg flex-1 flex flex-col justify-center text-center md:text-left"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission Statement</h3>
              <p className="text-lg leading-relaxed">
                To improve our clients' overall quality of health and wellness
                by encouraging the proper effective use of medications through
                exceptional products and services.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-2/3 flex flex-col space-y-6 text-center md:text-left">
            <Title>About Wayne Rx Drugs</Title>

            <div className="space-y-4">
              <Paragraph>
                We were established to promote the health of our community in
                Wayne, Michigan. We are dedicated to ensuring that each person
                we serve is satisfactorily given the services and products
                needed to attain an optimal level of wellness.
              </Paragraph>

              <Paragraph>
                The members of our team all share our mission of improving the
                lives of our clients. They have undergone the necessary
                training, background checks, and interviews to assure that they
                are capable of providing exceptional pharmaceutical services.
              </Paragraph>

              <Paragraph>
                At Wayne Rx Drugs, we treat you as if you were a member of our
                family. We get to know you, your health conditions, and the
                medicines you are taking so we can provide services that are
                suitable for your specific needs and preferences.
              </Paragraph>
            </div>
          </div>
        </Container>

        <div className="text-center mx-auto space-y-4 max-w-2xl pt-6">
          <div className="bg-gray-200 p-6 rounded-xl">
            <Paragraph>
              If you are interested in learning more about our pharmacy in
              Wayne, Michigan, you may call us at{" "}
              <a
                href={`tel:${phone}`}
                style={{ color: darkBlue }}
                className="font-semibold hover:underline"
              >
                {phone}
              </a>{" "}
              or{" "}
              <Link
                to="/contact-us"
                style={{ color: darkBlue }}
                className="font-semibold hover:underline"
              >
                send us a message
              </Link>{" "}
              online.
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  );
};
