import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { phone } from "../../utils/constants";
import { Link } from "react-router-dom";
import { darkBlue } from "../../utils/constants";

export const Vitamins = () => {
  return (
    <section id="services" className="mb-13 mt-15">
      <Container className="space-y-10 md:space-y-12 -mt-4">
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="w-full lg:w-2/3 flex flex-col space-y-6 text-center md:text-left">
            <Title> We stock a variety of vitamins and supplements. </Title>

            <div className="space-y-4">
              <Paragraph>
                When the food you eat cannot fulfill your needed intake of
                nutrients, vitamins and supplements can help. At our pharmacy in
                Warren, Michigan, we offer a variety of vitamins and supplements
                that can help you boost your health. You can take your pick of
                quality, budget-friendly products that are suitable for
                different needs and conditions.
              </Paragraph>

              <Paragraph>
                Should you have inquiries about this service, you may call us at{" "}
                <a
                  style={{ color: darkBlue }}
                  className="font-semibold hover:underline"
                  href={`tel:${phone}`}
                >
                  <strong>{phone}</strong>
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
          <div className="w-full lg:w-1/3 hidden lg:block">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*mTQ4JckiEYeWyYJyTJmNnw.jpeg"
              alt="Assortment of vitamins and supplements."
              className="w-full h-full object-cover rounded-2xl shadow-lg object-[-10px_center]"
              // adjust the var above.
            />
          </div>
        </Container>
      </Container>
    </section>
  );
};
