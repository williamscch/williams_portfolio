import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import StoryChapters from "@/components/StoryChapters";
import HumanSide from "@/components/HumanSide";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CaseStudyModal from "@/components/CaseStudyModal";
import StructuredData from "@/components/StructuredData";
import { PortfolioProvider } from "./context/portfolio";

function App() {
  return (
    <PortfolioProvider>
      <StructuredData />
      <Layout>
        <Hero />
        <StoryChapters />
        <HumanSide />
        <Toolkit />
        <Contact />
        <Footer />
      </Layout>
      <CaseStudyModal />
    </PortfolioProvider>
  );
}

export default App;
