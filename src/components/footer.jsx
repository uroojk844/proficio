"use client";
import NavLinks from "./nav-links";

function Footer() {
  return (
    <section className="border-t bg-background sticky top-0 z-50 border-white/20">
      <footer className="max-w-[1440px] mx-auto p-4 flex items-center gap-4">
        <p className="max-w-max mr-auto">
          &copy; Proficio Softwarea Solutions - {new Date().getFullYear()}
        </p>

        <NavLinks className="mr-0" />
      </footer>
    </section>
  );
}

export default Footer;
