import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { email, address } from "../../utils/constants";

export const ContactInfo = () => {
  return (
    <section id="contact-info" className="py-4 md:py-12 -mt-8 mb-8 lg:mb-0">
      {" "}
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left side - Title and content */}
        <div className="w-full flex flex-col justify-center text-center lg:text-left border border-heading-1 rounded-3xl p-6 md:p-8">
          <p className="text-lg text-gray-600">
            Better medicines, better life.
          </p>
          <Title>Contact Information</Title>
          <Paragraph className="mt-4 max-w-2xl">
            Do not hesitate to get in touch with us. We gladly welcome your
            feedback, inquiries, and suggestions.
          </Paragraph>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center text-sm">
            {/* Address */}
            <div className="grid grid-cols-2 text-xs md:text-sm md:grid-cols-1 gap-6 md:col-span-1 w-full">
              <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-primary flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s6-5.373 6-11a6 6 0 1 0-12 0c0 5.627 6 11 6 11z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <div>
                  <p>{address}</p>
                </div>
              </div>

              {/* Phone + Fax */}
              <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="w-8 h-8 text-primary flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p>
                    Call: <a href="tel:7346294336">734-629-4336</a>
                  </p>

                  <p>
                    Fax: <a href="tel:7344695219">734-469-5219</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-primary flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <div>
                  <p>
                    {" "}
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-primary flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p>MTu: 8:30 AM - 5:30 PM</p>
                  <p>WTh: 8:30 AM - 4:30 PM</p>
                  <p>Fri: 8:30 AM - 3:30 PM</p>
                  <p>Weekend: Closed</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative w-full h-[250px] md:h-[280px] md:col-span-1">
              <iframe
                src="https://maps.google.com/maps?q=34815+W+Michigan+Ave+Ste+B,+Wayne,+MI+48184&output=embed&z=17"
                className="w-full h-full rounded-2xl"
                loading="lazy"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/kXTa7SfGp5HPwBSd7"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 rounded-2xl"
                aria-label="Open in Google Maps"
              />
            </div>
          </div>
        </div>

        {/* Right side - Image */}

        <div className="hidden lg:block w-full h-80 sm:h-96 md:h-full min-h-[400px]">
          <img
            src="https://cdn.sanity.io/images/0vv8moc6/drugtopics/1ada8d1ec0a3eae647595989386d73c2046720a5-5673x3782.jpg"
            className="w-full h-full object-cover rounded-3xl"
            alt="Pharmacist assisting a customer"
          />
        </div>
      </Container>
    </section>
  );
};
