import { NavLink } from "react-router-dom";

const links = [
  { to: "/", text: "Home" },
  { to: "/courses", text: "Courses" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
  { to: "/instructor", text: "Become an Instructor" },
];

const DesktopMenu = () => {
  return (
    <nav className="hidden sm:flex gap-x-1">
      {links.map((link) => (
        <NavLink
          className="text-gray-300 px-2 py-3 text-sm"
          to={link.to}
          key={link.text}
        >
          {link.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default DesktopMenu;
