"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import NavLinks from "./nav-links";

function NavBar() {
  return (
    <section className="border-b bg-background sticky top-0 z-50 border-white/20">
      <nav className="max-w-[1440px] mx-auto p-4 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-4 mr-auto">
          <img src="/logo.svg" alt="logo" className="w-8" />
          <p className="text-sm max-w-[18ch] font-medium">
            Proficio Softwarea Solutions
          </p>
        </Link>

        <NavLinks />

        <Link href="/#courses">
          <Button variant="outline" className="max-sm:hidden">
            Learn
          </Button>
        </Link>
        <Link href="https://forms.gle/12NrFd3Qix6b93cF6" target="_blank">
          <Button variant="outline">Register</Button>
        </Link>
      </nav>
    </section>
  );
}

export default NavBar;
