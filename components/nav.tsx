import React from "react";
import Link from "next/link";

const Nav: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  return (
    <nav className="flex flex-wrap gap-5">
      <Link href="/">Home</Link>
      <Link href="/superheroes">Superheroes</Link>
      <Link href="/parallel">Parallel</Link>
      <Link href="/parallel/dynamic">Dynamic Parallel</Link>
      <Link href="/dependent">Dependent Queries</Link>
    </nav>
  );
};

export default Nav;
