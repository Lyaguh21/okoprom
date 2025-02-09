"use client";

import Header from "@/app/components/Header/Header";
import Footer from "./components/Footer/Footer";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import CategorySection from "./components/CategorySection/CategorySection";
import AboutGridSection from "./components/AboutGridSection/AboutGridSection";

function App() {
  return (
    <>
      <Header />
      <CategorySection />
      <AboutGridSection />
      <AboutUsSection />
      <FeedbackForm />
      <Footer />
    </>
  );
}

export default App;
