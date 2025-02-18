"use client";

import { Text } from "@radix-ui/themes";

function PassFeedbackForm() {
  return (
    <div className="md:px-[72] px-4  lg:px-[40px] py-[120px] font-Golos">
      <div className="bg-textBlack rounded-[20px] flex px-[12px] sm:px-11 py-[60px] flex-wrap md:flex-nowrap">
        <div className=" h-[326px] flex flex-col justify-between basis-full md:basis-1/2">
          <h1 className="text-white text-[50px] lg:text-[68px]">
            Спасибо за <br /> обращение !
          </h1>
        </div>
        <div className="flex flex-col justify-end basis-full md:basis-1/2">
          <h2 className="text-textLightGray text-[35px]">
            Мы свяжемся с вами в ближайшее время
          </h2>
        </div>
      </div>
    </div>
  );
}
export default PassFeedbackForm;
