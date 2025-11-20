import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { Challenges } from "../components/Challenges";
import { About } from "../components/About";
import { WhyBraveDev } from "../components/WhyBraveDev";
import { Insight } from "../components/Insight";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <Challenges />
      <About />
      <WhyBraveDev />
      <Insight />
      <Contact />
    </>
  );
}
