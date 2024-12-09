"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/courses",
    label: "Courses",
  },
  {
    href: "/about",
    label: "About us",
  },
  {
    href: "/contact",
    label: "Contact us",
  },
];

function NavBar() {
  const pathname = usePathname();

  return (
    <section className="border-b bg-background sticky top-0 z-50 border-white/20">
      <nav className="max-w-[1440px] mx-auto p-4 flex items-center gap-4">
        <div className="flex items-center gap-4 mr-auto">
          <img src="/logo.svg" alt="logo" className="w-8" />
          <p className="text-sm max-w-[18ch] font-medium">Proficio Softwarea Solutions</p>
        </div>

        <div className="flex gap-8 mr-auto">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className={
                link.href == pathname ? "text-white" : "text-muted-foreground"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button variant="outline">Learn</Button>
        <Button variant="outline">Register</Button>
      </nav>
    </section>
  );
}

export default NavBar;
