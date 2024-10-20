import CardSection from "./components/CardSection";
import CityGallery from "./components/CityGallery";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fff]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <CardSection />
        <PricingSection />
        <CityGallery />
        <Footer />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
