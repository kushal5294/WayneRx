import React from "react";
import { Container } from "../shared/Container";
import logo from "/assets/logos/WayneRxLogo.svg";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";
import { red } from "../../utils/constants";

export const Footer = () => {
  return (
    <footer
      // style={{ backgroundColor: "#277ae6" }}
      className="relative pt-9 pb-5 bg-gray-200 lg:bg-box-bg"
    >
      <style>{`
        .hide-on-mobile {
          display: none;
        }
        @media (min-width: 768px) {
          .hide-on-mobile {
            display: inline-flex;
          }
        }
      `}</style>
      <Container className="pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center gap-3 mb-4 md:mb-0">
            <img
              src={logo}
              className="w-50 lg:w-60"
              alt="Wayne Rx Drugs Logo"
            />
            <div className=" text-base lg:text-base" style={{ color: red }}>
              © Wayne Rx 2026
            </div>
          </div>

          <div className="flex flex-col items-center">
            <ul
              className="flex flex-wrap justify-center items-center text-sm lg:text-lg list-none"
              style={{ color: red }}
            >
              {navItems.map((item, key) => {
                const isAboutUs =
                  item.text.toLowerCase() === "about us" ||
                  item.text.toLowerCase() === "resources" ||
                  item.text.toLowerCase() === "vaccines";
                const isLastItem = key === navItems.length - 1;

                return (
                  <React.Fragment key={key}>
                    <li
                      className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-0.5 ${
                        isAboutUs ? "hide-on-mobile" : ""
                      }`}
                    >
                      <NavItem href={item.href} text={item.text} />
                    </li>
                    {!isLastItem && (
                      <span
                        style={{ color: red }}
                        className={`mx-3 self-center text-lg ${
                          isAboutUs ? "hide-on-mobile" : ""
                        }`}
                      >
                        ·
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>

            <ul
              className="flex flex-wrap justify-center items-center text-sm lg:text-lg list-none "
              style={{ color: red }}
            >
              {[
                {
                  href: "https://brightonrxpharmacy.com/HIPPA-Privace-Practices-Notice.pdf",
                  text: "Hippa Privacy Practices Notice",
                },
              ].map((item, key, arr) => (
                <React.Fragment key={key}>
                  <li className="inline-flex items-center justify-center whitespace-nowrap px-3 py-0.5">
                    <NavItem href={item.href} text={item.text} newTab />
                  </li>
                  {key < arr.length - 1 && (
                    <span
                      className="mx-3  self-center text-sm"
                      style={{ color: red }}
                    >
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
