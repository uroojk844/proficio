import LampDemo from "@/components/ui/lamp";
import Courses from "./courses/page";
import Contact from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <main>
      <LampDemo />
      <Courses />
      <About />
      <Contact />
    </main>
  );
}
