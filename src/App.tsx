import Layout from "@/components/Layout";
import Me from "@/components/Me";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { PortfolioProvider } from "./context/portfolio";

const navOptions = [
  { label: "Services", toId: "services" },
  { label: "About", toId: "about" },
  { label: "Skills", toId: "skills" },
  { label: "Me.", toId: "me" },
  { label: "Portfolio", toId: "portfolio" },
  { label: "Testimonials", toId: "testimonials" },
  { label: "Contact", toId: "contact" },
];

function App() {
  return (
    <PortfolioProvider>
      <Layout options={navOptions}>
        <Me />
        <Services />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Layout>
    </PortfolioProvider>
  );
}

export default App;
