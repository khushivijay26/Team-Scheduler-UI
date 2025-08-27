'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Events", active: false },
    { name: "Team View", active: true },
    { name: "Team Tracking", active: false },
  ];

  return (
    <header className="flex items-center px-4 sm:px-6 py-3 border-b bg-white relative">

      <div className="flex items-center gap-2 sm:gap-4">
        <h3 className="text-sm">November 2024</h3>
      </div>

      <nav className="hidden sm:flex items-center gap-6 text-sm mx-auto">
        {navLinks.map((link, i) => (
          <button
            key={i}
            className={
              link.active
                ? "font-medium border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }
          >
            {link.name}
          </button>
        ))}
      </nav>

      <button
        className="sm:hidden ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col gap-3 p-4 sm:hidden z-50">
          <nav className="flex flex-col gap-2 text-sm">
            {navLinks.map((link, i) => (
              <button
                key={i}
                className={
                  link.active
                    ? "font-medium border-l-2 pl-2 border-black text-left"
                    : "text-gray-500 hover:text-black text-left"
                }
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Topbar;