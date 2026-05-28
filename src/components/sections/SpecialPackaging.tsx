import { useState, useEffect } from "react";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { phone, darkBlue } from "../../utils/constants";
import { Link } from "react-router-dom";

export const SpecialPackaging = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "video-overlay") {
      setShowVideo(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowVideo(false);
      }
    };

    if (showVideo) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    // Cleanup
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showVideo]);

  return (
    <section id="services" className="mb-13 mt-15">
      <Container className="space-y-10 md:space-y-12 -mt-4">
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-2/3 flex flex-col space-y-6 text-center md:text-left">
            <Title>
              {" "}
              We help you improve your medication adherence with Dispill®{" "}
            </Title>

            <div className="space-y-4">
              <Paragraph>
                When you are a senior or someone with a medical condition,
                taking multiple medications becomes a part of life. That’s why{" "}
                <span style={{ color: darkBlue }} className="font-bold">
                  Wayne Rx Pharmacy
                </span>{" "}
                proudly offers{" "}
                <span style={{ color: darkBlue }} className="font-bold">
                  Dispill®
                </span>
                : a convenient, safe, and easy-to-use multi-dose packaging
                system designed to help you take the right medication at the
                right time.{" "}
              </Paragraph>

              <Paragraph>
                We can provide up to a month’s worth of prescriptions, grouping
                your medicines according to the times they need to be taken
                during the day. This helps reduce confusion and ensures you stay
                on track with your prescribed regimen.
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
                onClick={() => setShowVideo(true)}
                style={{ color: darkBlue }}
                className="font-bold inline-flex items-center gap-1 border-2 rounded-xl border-current px-4 py-2 cursor-pointer hover:bg-blue-50"
              >
                <span className="inline-flex items-center gap-1">
                  Watch Video
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
            <div className="h-full flex">
              <img
                src="assets/logos/dispill-flyer.png"
                alt="Dispill and Wayne Rx Flyer."
                className="w-full h-full object-contain object-center scale-100"
              />
            </div>
          </div>
        </Container>
      </Container>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div
          id="video-overlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" // transparent black background
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-[90%] max-w-3xl relative">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/OBwWvn-beiY"
                title="Dispill Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
