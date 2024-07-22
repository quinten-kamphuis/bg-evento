import Link from "next/link";
import React from "react";

type Props = {};

const routes = [
  { name: "Terms & Conditions", path: "/terms-conditions" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const Footer = (props: Props) => {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2050 Quinten. All rights reserved.
      </small>

      <ul className="flex gap-3 sm:gap-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
