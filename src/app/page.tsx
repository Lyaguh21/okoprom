"use client";

import Header from "@/app/components/Header/Header";
import Footer from "./components/Footer/Footer";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import CategorySection from "./components/CategorySection/CategorySection";

function App() {
  return (
    <>
      <Header />
      <CategorySection />
      <AboutUsSection />
      <FeedbackForm />
      <Footer />
    </>
  );
}

export default App;
