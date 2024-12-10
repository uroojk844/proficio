import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "@/assets/links.json";

function NavLinks({className}) {
  const pathname = usePathname();

  return (
    <div className={`max-sm:hidden flex gap-8 ${className}`}>
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
  );
}

export default NavLinks;
