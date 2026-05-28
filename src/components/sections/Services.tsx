import { services } from "../../utils/services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import SellingPoint from "../elements/SellingPoint";

export const Services = () => {
  return (
    <section id="services">
      {" "}
      <Container className="space-y-10 md:space-y-12 -mt-4">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title> Our Services</Title>
          <Paragraph>
            Our pharmacy offers quality services at budget-friendly prices.
          </Paragraph>
        </div>
        <SellingPoint />
        <div className="h-px" />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
              buttonLink={service.buttonLink}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
