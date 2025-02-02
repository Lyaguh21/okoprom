"use client";

import Header from "@/app/components/Header/Header";
import Footer from "./components/Footer/Footer";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

function App() {
  return (
    <>
      <Header />
      <div className="h-[500px]"></div>
      <FeedbackForm />
      <Footer />
    </>
  );
}

export default App;
