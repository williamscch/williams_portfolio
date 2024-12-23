import Layout from "@/components/Layout";
import Me from "@/components/Me";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PortfolioProvider } from "./context/portfolio";

const navOptions = [
  { label: "About", toId: "about" },
  { label: "Portfolio", toId: "portfolio" },
  { label: "Services", toId: "services" },
  { label: "Me.", toId: "me" },
  { label: "Skills", toId: "skills" },
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
        <Testimonials />
        <Contact />
        <Footer />
      </Layout>
    </PortfolioProvider>
  );
}

export default App;
