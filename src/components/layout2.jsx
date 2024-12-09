import { Button } from "./ui/button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Icon } from "@iconify/react";

function Layout2() {
  const words = [
    { text: "Level" },
    { text: "Up" },
    { text: "Your" },
    { text: "Coding" },
    { text: "Skills!", className: "text-blue-500" },
  ];
  return (
    <section className="min-h-[calc(100dvh-76px)] grid place-items-center content-center">
      <TypewriterEffectSmooth className="mb-4" words={words} />

      <div className="text-xl mb-6">
        Master in-demand Programming Languages & Technologies.
      </div>

      <Button className="group">
        <span>Explore now</span>
        <Icon
          className="group-hover:translate-x-1 duration-300"
          icon="mdi:arrow-right"
        />
      </Button>
    </section>
  );
}

export default Layout2;
