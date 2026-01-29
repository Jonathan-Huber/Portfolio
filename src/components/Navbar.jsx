import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/#projects", label: "Projets" },
    { href: "/#skills", label: "Skills" },
    { href: "/#about", label: "À propos" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <span className="text-xl text-cyan-600 font-heading font-bold border border-cyan-800 px-2 py-1.5 ">
            JH
          </span>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="relative h-4 w-6 md:hidden"
            aria-label="Menu"
          >
            <span
              className={`absolute left-0 h-0.5 w-6 bg-black transition-transform duration-300 origin-center ${
                open ? "rotate-45 top-1.5" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-black transition-opacity duration-300 ${
                open ? "opacity-0" : "top-2"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-black transition-transform duration-300 origin-center ${
                open ? "-rotate-45 top-1.5" : "top-4"
              }`}
            />
          </button>

          {/* Menu desktop */}

          <ul className="hidden md:flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block transition-transform duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu mobile animé */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => {
                  setOpen(false);
                }}
                className="inline-block transition-transform duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
