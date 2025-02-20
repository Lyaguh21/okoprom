"use client";

import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import CategorySection from "../components/CategorySection/CategorySection";
import AboutGridSection from "../components/AboutGridSection/AboutGridSection";
import SliderSection from "../components/SliderSection/SliderSection";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <SliderSection />
      <CategorySection />
      <AboutGridSection />
      <AboutUsSection />
    </>
  );
}

export default App;
