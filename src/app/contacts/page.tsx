"use client";

import { Bounce, ToastContainer } from "react-toastify";
import ContactsMainSection from "../components/ContactsMainSection/ContactsMainSection";

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
      <ContactsMainSection />
    </>
  );
}
