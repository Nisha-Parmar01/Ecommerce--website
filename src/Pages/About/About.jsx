import AboutHero from "../../components/Abouthero/Abouthero";
import Testimonials from "../../components/Testimonials/Testimonials";
import Stats from "../../components/Stats/Stats";
import Mission from "../../components/Mission/Mission";
import Values from "../../components/Values/Values";
import Team from "../../components/Team/Team";
import CTA from "../../components/CTA/CTA";

const About = () => {
  return (
    <>
      <AboutHero />
        <Stats />
        <Mission  />
        <Values />
        <Team />
        <CTA />
        <Testimonials />
    </>
  );
};

export default About;