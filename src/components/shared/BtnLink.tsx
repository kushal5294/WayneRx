import { neutralBlue } from "../../utils/constants";
interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      style={{ backgroundColor: neutralBlue, borderColor: neutralBlue }}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border cursor-pointer ${className}`}
    >
      <span className="relative z-10 text-white"> {text}</span>
    </a>
  );
};
