"use client";
import { Bounce, ToastContainer } from "react-toastify";
import CartSection from "../../components/CartSection/CartSection";
import ContactForm from "@/app/components/ContactForm/ContactForm";

export default function cart() {
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
      <CartSection />
      <ContactForm />
    </>
  );
}
