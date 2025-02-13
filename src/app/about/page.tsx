"use client";

import AboutCompanyFirst from "../components/AboutCompanyFirst/AboutCompanyFirst";
import AboutCompanySecond from "../components/AboutCompanySecond/AboutCompanySecond";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";

export default function about() {
  return (
    <>
      <AboutCompanyFirst />
      <AboutUsSection />
      <AboutCompanySecond />
    </>
  );
}
