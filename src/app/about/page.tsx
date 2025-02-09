"use client";

import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import FeedbackForm from "../components/FeedbackForm/FeedbackForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function about() {
  return (
    <>
      <Header />
      <AboutUsSection />
      <FeedbackForm />
      <Footer />
    </>
  );
}
