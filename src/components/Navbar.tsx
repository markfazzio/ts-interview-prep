"use client";

import { useState } from "react";
import { SECTIONS } from "@/constants";

interface NavbarProps {
  activeId?: string;
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { activeId, className } = props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full top-0 left-0 px-10 ${className}`}>
      <div className="max-w-screen-xl">
        <div className="md:hidden flex items-center">
          <div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="m-2 p-2 w-10 h-10 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {isMobileMenuOpen ? (
            <div className="ml-auto">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path
                    fill="#fff"
                    d="M20.746 3.329a1 1 0 0 0-1.415 0l-7.294 7.294-7.294-7.294a1 1 0 1 0-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 0 0 1.414 1.415l7.294-7.295 7.294 7.295a1 1 0 0 0 1.415-1.415l-7.295-7.294 7.295-7.294a1 1 0 0 0 0-1.414Z"
                  />
                </svg>
              </button>
            </div>
          ) : undefined}
        </div>

        <div
          className={`${
            !isMobileMenuOpen ? "hidden" : ""
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:mt-0 md:border-0">
            {SECTIONS.map((section: { label: string; value: string }) => (
              <li key={`menu-item-${section.value}`}>
                <a
                  href={`#${section.value}`}
                  className={`menu-item block py-3 px-4 ${
                    section.value === activeId ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
