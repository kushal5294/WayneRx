import { useState } from "react";
import { Container } from "../shared/Container";
import { AnimatedLogo } from "./AnimatedLogo";
import { NavItem } from "../shared/NavItem";
import { phone, email, fax } from "../../utils/constants";
import { darkBlue } from "../../utils/constants";

export const navItems = [
  { href: "/", text: "Home" },
  { href: "/vaccines", text: "Vaccines" },
  { href: "/about-us", text: "About Us" },
  { href: "/services", text: "Services" },
  { href: "/resources", text: "Resources" },
  { href: "/contact-us", text: "Contact Us" },
];

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="z-50 py-6 bg-white" style={{ color: darkBlue }}>
      <Container>
        <nav className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {/* --- Top Row: Logo + Dropdown / Nav Links --- */}
          <div className="w-full flex justify-between items-center mb-4 lg:mb-0">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center">
              <AnimatedLogo />
            </a>

            {/* Dropdown for small/medium */}
            <div className="lg:hidden relative mt-4">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{ color: darkBlue, borderColor: darkBlue }}
                className="flex items-center gap-2 px-3 py-2 border rounded-md"
              >
                {/* Hamburger icon */}
                <span className="flex flex-col justify-between w-5 h-4">
                  <span className="block h-0.5 bg-current rounded"></span>
                  <span className="block h-0.5 bg-current rounded"></span>
                  <span className="block h-0.5 bg-current rounded"></span>
                </span>
              </button>

              {dropdownOpen && (
                <ul
                  style={{ backgroundColor: darkBlue }}
                  className="absolute right-0 mt-2 w-40 rounded-md shadow-lg overflow-hidden z-50"
                >
                  {navItems.map((item, key) => (
                    <li
                      key={key}
                      className={`border-b ${
                        key === navItems.length - 1
                          ? "border-transparent"
                          : "border-white"
                      } hover:bg-[#114d6e]`}
                    >
                      <a
                        href={item.href}
                        className="block px-4 py-2 whitespace-nowrap text-white"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Nav Links + Contact Info for large screens */}
            <div className="hidden lg:flex flex-col ml-auto justify-start gap-1 mt-6">
              {/* Nav Links */}
              <ul className="flex flex-row items-center justify-end text-base list-none divide-x divide-gray-300">
                {navItems.map((item, key) => (
                  <li
                    key={key}
                    className="items-center justify-center whitespace-nowrap px-3"
                  >
                    <NavItem href={item.href} text={item.text} />
                  </li>
                ))}
              </ul>

              {/* Contact Info in the same container, row below links */}
              <div
                className="flex flex-row items-center gap-4 text-lg divide-x divide-gray-300"
                style={{ color: darkBlue }}
              >
                {/* Email */}
                <div className="flex items-center gap-2 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8 6"
                    fill="currentColor"
                    className="w-5 h-5 align-middle"
                  >
                    <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
                  </svg>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-phone w-5 h-5 align-middle"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
                {/* Fax */}
                <div className="flex items-center gap-2 px-3">
                  <img
                    src="/assets/logos/fax.svg"
                    alt="Fax Icon"
                    className="w-5 h-5 align-middle"
                    style={{
                      filter:
                        "invert(14%) sepia(79%) saturate(3781%) hue-rotate(188deg) brightness(93%) contrast(82%)",
                    }}
                  />
                  <a href={`tel:${fax}`}>{fax}</a>
                </div>
              </div>
            </div>
          </div>

          {/* --- Contact Info for small/medium --- */}
          <div
            className="w-full flex flex-col items-center justify-center lg:hidden text-base md:text-lg gap-2"
            style={{ color: darkBlue }}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-phone w-5 h-5 align-middle"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
              <span className="mx-2">|</span>
              <div className="flex items-center gap-2">
                <img
                  src="/assets/logos/fax.svg"
                  alt="Fax Icon"
                  className="w-5 h-5 align-middle"
                  style={{
                    filter:
                      "invert(14%) sepia(79%) saturate(3781%) hue-rotate(188deg) brightness(93%) contrast(82%)",
                  }}
                />
                <a href={`tel:${fax}`}>{fax}</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 6"
                fill="currentColor"
                className="w-5 h-5 align-middle"
              >
                <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
              </svg>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
