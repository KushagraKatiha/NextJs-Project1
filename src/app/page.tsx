import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import UpcomingWebenars from "@/components/UpcomingWebenars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testimonials/>
      <UpcomingWebenars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
