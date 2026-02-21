import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Portfolio from "./components/Portfolio";
import HowWeWork from "./components/HowWeWork";
import ProductDetails from "./components/ProductDetails";
import NTokProducts from "./components/NTokProducts";
import FoundersMessage from "./components/FoundersMessage";
import PurificationProcess from "./components/PurificationProcess";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useLenis } from "./hooks/useLenis";
import "lenis/dist/lenis.css";

function App() {
  useLenis();
  return (
    <div>
      <Header />
      <Hero />
      <WhoWeAre />
      <ProductDetails />
      <HowWeWork />
      <Portfolio />
      <NTokProducts />
      <FoundersMessage />
      <PurificationProcess />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
