"use client";

import Delivery from "../../components/Delivery/Delivery";
import { DeliveryText } from "../../../../Text";
import { LiquidChrome } from "../../components/Delivery/LiquidChrome";
import { Bounce, ToastContainer } from "react-toastify";

export default function deliveryPayment() {
  return (
    <div className="w-full h-[1500px] bigPhone:h-[1200px] sm:h-[992px] relative border-y-2  border-textBlack font-Golos">
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={0.2}
        amplitude={0.39}
        interactive={false}
      />

      <div className="bg-white bg-opacity-35 border-[1px] border-[#ffffff25] shadow backdrop-blur-[15px] drop-shadow-lg rounded-2xl absolute z-10 p-4 my-[48px] mx-[16px] md:mx-[72px]  lg:ml-[40px]">
        <div className="flex">
          <h4 className="font-medium text-[40px] leading-[48px] mx-auto">
            Доставка и оплата
          </h4>
        </div>

        <Delivery
          title={DeliveryText[0].title}
          subtitle={DeliveryText[0].subtitle}
        />
        <Delivery
          title={DeliveryText[1].title}
          subtitle={DeliveryText[1].subtitle}
        />
        <Delivery
          title={DeliveryText[2].title}
          subtitle={DeliveryText[2].subtitle}
        />
      </div>
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
    </div>
  );
}
