import { services } from "../../utils/full-services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { phone } from "../../utils/constants";
import { Link } from "react-router-dom";
import { darkBlue } from "../../utils/constants";
export const FullServices = () => {
  return (
    <section id="services" className="mb-13 mt-15">
      <Container className="space-y-10 md:space-y-12 -mt-4">
        <div className="text-center mx-auto space-y-4">
          <Title>
            Our services are designed to enhance your quality of life.
          </Title>
          <Paragraph>
            At Wayne Rx Pharmacy, we are dedicated to improving the health of
            the Wayne, Michigan community. Through personalized services,
            affordable products, and a compassionate staff, we provide the
            support you need to enhance your health and wellness.
          </Paragraph>
        </div>

        {/* Center last row items */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {services.map((service, key) => (
            <div
              key={key}
              className={
                service.title === "Contact Our Team" ? "hidden lg:block" : ""
              }
            >
              <Service
                title={service.title}
                description={service.description}
                icon={service.icon}
                buttonLink={service.buttonLink}
                buttonText={service.buttonText}
              />
            </div>
          ))}
        </div>
        <div className="text-center mx-auto space-y-4 max-w-2xl -mb-8">
          <div className="bg-gray-200 p-6 rounded-xl">
            <Paragraph>
              For further details about our services, you may call us at{" "}
              <a
                style={{ color: darkBlue }}
                className="font-semibold hover:underline"
                href={`tel:${phone}`}
              >
                <strong>{phone}</strong>
              </a>{" "}
              or{" "}
              <Link
                style={{ color: darkBlue }}
                className="font-semibold hover:underline"
                to="/contact-us"
              >
                <strong>send us a message</strong>
              </Link>{" "}
              online.
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  );
};
