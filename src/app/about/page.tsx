"use client";

import { Bounce, ToastContainer } from "react-toastify";
import AboutCompanyFirst from "../components/AboutCompanyFirst/AboutCompanyFirst";
import AboutCompanySecond from "../components/AboutCompanySecond/AboutCompanySecond";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";

export default function about() {
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
      <AboutCompanyFirst />
      <AboutUsSection />
      <AboutCompanySecond />
    </>
  );
}
