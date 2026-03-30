import WelcomePatients from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutUs from "@/components/doctor";
import FAQ from "@/components/faq";
import HeroBanner from "@/components/HeroBanner";
import TreatmentsWeOffer from "@/components/treatment-offer";
import OurValues from "@/components/treatments";
import Departments from "@/components/why-choose-us";
import BookAppointment from "@/components/contact";
import { SurgeryResultsSection } from "@/components/beforeafter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <OurValues />
      <SurgeryResultsSection />
      <TreatmentsWeOffer />
      <AboutUs />
      <Departments />
      <WelcomePatients />
      <FAQ />
      <BookAppointment />
      <Footer />
    </main>
  );
}
