"use client";

import Header from "@/app/components/Header/Header";
import Footer from "./components/Footer/Footer";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import CategorySection from "./components/CategorySection/CategorySection";
import AboutGridSection from "./components/AboutGridSection/AboutGridSection";
import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <CategorySection />
      <AboutGridSection />
      <AboutUsSection />
      <FeedbackForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
