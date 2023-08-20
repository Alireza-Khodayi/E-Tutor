import RecentlyAddedCourses from "../components/Pages/HomePage/RecentlyAddedCourses/RecentlyAddedCourses";
import Categories from "../components/Pages/HomePage/Categories/Categories";
import HeroSection from "../components/Pages/HomePage/HeroSection";
import Footer from "../components/template/layout/Footer";
import Header from "../components/template/layout/Header";
import BecomeInstructor from "../components/Pages/HomePage/BecomeInstructor";
import TrustedCompanies from "../components/Pages/HomePage/TrustedCompanies";
import TopInstructors from "../components/Pages/HomePage/TopInstructors";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <RecentlyAddedCourses />
      <BecomeInstructor />
      <TopInstructors />
      <TrustedCompanies />
      <Footer />
    </>
  );
};

export default HomePage;
