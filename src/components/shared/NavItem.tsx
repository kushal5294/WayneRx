interface NavItemProps {
  href: string;
  text: string;
  newTab?: boolean;
}

export const NavItem = ({ href, text, newTab }: NavItemProps) => {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="duration-300 font-medium ease-linear hover:text-[#114d6e] py-3 no-underline"
    >
      {text}
    </a>
  );
};
