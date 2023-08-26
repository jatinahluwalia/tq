import React from "react";
import Link from "next/link";

const Nav: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  return (
    <nav className="flex gap-5">
      <Link href="/">Home</Link>
      <Link href="/superheroes">Superheroes</Link>
    </nav>
  );
};

export default Nav;
