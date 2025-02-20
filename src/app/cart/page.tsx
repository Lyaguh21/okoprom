"use client";
import { Bounce, ToastContainer } from "react-toastify";
import CartSection from "../components/CartSection/CartSection";
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

      <CartSection />
    </>
  );
}
