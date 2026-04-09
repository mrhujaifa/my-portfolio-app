import Hero from "./{My-app}/Hero/Hero";

import About from "./{My-app}/about/about";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import EducationShowcase from "@/components/modules/education/page";
import SkillsShowcase from "@/components/modules/skills/SkillsShowcase";
import ProjectsShowcase from "@/components/modules/projects/projects";
import Contact from "@/components/modules/contact/Contact";

const page = () => {
  return (
    <div>
      <section
        id="home"
        className="container mx-auto scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36"
      >
        <Hero />
      </section>

      <About />

      <SkillsShowcase />

      <section
        id="education"
        className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36"
      >
        <EducationShowcase />
      </section>

      <section
        id="projects"
        className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36"
      >
        <ProjectsShowcase />
      </section>

      <div>
        <Services />
      </div>

      <section
        id="contact"
        className="container mx-auto scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36"
      >
        <Contact />
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
