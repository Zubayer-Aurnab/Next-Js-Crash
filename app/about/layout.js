import Link from "next/link";
import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <div>
      <nav className="mb-2">
          <ul className="flex gap-6 mt-10 border-b">
            <li>
              <Link href="/about/mission">Mission</Link>
            </li>
            <li>
              <Link href="/about/vision">Vision</Link>
            </li>
          </ul>
        </nav>
      {children}
    </div>
  );
};

export default AboutLayout;
