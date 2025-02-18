"use client";

import { Bounce, ToastContainer } from "react-toastify";
import CatalogInfoSection from "../components/CatalogInfoSection/CatalogInfoSection";
import CatalogPage from "../components/CatalogSection/CatalogPage";

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
      <CatalogInfoSection />
      <CatalogPage />
    </>
  );
}
