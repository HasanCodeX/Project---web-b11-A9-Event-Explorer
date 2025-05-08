import { Helmet } from "react-helmet-async";
import HeroSection from "../Components/HeroSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import UpcomingEventsSection from "../Components/UpcomingEventsSection";
import Testimonials from '../Components/Testimonials';

const Home = () => {
  return (
    <>
      <Helmet>
        <title> Home |  Event Explorer</title>
        <meta name="description" content="Discover local events near you with Event Explorer." />
      </Helmet>

      <HeroSection />
      <UpcomingEventsSection />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default Home;
