import { useNavigate } from "react-router-dom";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { phone, darkBlue } from "../../utils/constants";
import { Link } from "react-router-dom";

export const VaccineInfo = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="mb-13 mt-15">
      <Container className="space-y-10 md:space-y-12 -mt-4">
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-2/3 flex flex-col space-y-6 text-center md:text-left">
            <Title> Stay Protected, Stay Healthy </Title>

            <div className="space-y-4">
              <Paragraph>
                Whether you're preparing for travel, safeguarding your health,
                or keeping up with recommended immunizations,{" "}
                <span style={{ color: darkBlue }} className="font-bold">
                  Wayne Rx Pharmacy
                </span>{" "}
                makes it easy to stay on top of your vaccinations. Visit us
                today for quick, convenient, and professional vaccine services
                to protect yourself and your loved ones.
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
              <button
                onClick={() => {
                  navigate("/booking");
                  window.scrollTo({ top: 0, behavior: "smooth" }); // or behavior: "auto"
                }}
                style={{ color: darkBlue }}
                className="font-bold inline-flex items-center gap-1 border-2 rounded-xl border-current px-4 py-2 cursor-pointer hover:bg-blue-50"
              >
                <span className="inline-flex items-center gap-1">
                  Book Now
                  <img
                    src="assets/logos/link.svg"
                    alt="Link icon"
                    className="w-4 h-4 inline-block"
                    style={{
                      filter:
                        "invert(14%) sepia(79%) saturate(3781%) hue-rotate(188deg) brightness(93%) contrast(82%)",
                    }}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/3 hidden lg:block">
            <img
              src="https://media.istockphoto.com/id/1387226163/photo/portrait-of-a-little-boy-with-a-plaster-on-his-arm-after-an-injection.jpg?s=612x612&w=0&k=20&c=3dlo_ztuREvJWLNbdqlgGcztceBgk5qDdU7ulYaErkk="
              alt="Pharmacist assisting senior couple"
              className="w-full h-full object-cover rounded-2xl shadow-lg object-[-20px_center]"
            />
          </div>
        </Container>
      </Container>
    </section>
  );
};
