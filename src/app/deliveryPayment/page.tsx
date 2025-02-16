"use client";

import Delivery from "../components/Delivery/Delivery";
import { DeliveryText } from "../../../Text";
import { LiquidChrome } from "../components/Delivery/LiquidChrome";

export default function deliveryPayment() {
  return (
    <div className="pt-[60px] mx-4 md:mx-[72px] lg:mx-[40px] font-Golos border-t-[1px]  border-borderWhite dark:border-textBlack">
      <h4 className="font-medium text-[40px] leading-[48px] dark:text-white">
        Доставка и оплата
      </h4>
      <div className="flex flex-row">
        <div className="basis-1/2">
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
        <div className="basis-1/2 pt-[60px]">
          <LiquidChrome
            baseColor={[0.1, 0.1, 0.1]}
            speed={0.2}
            amplitude={0.39}
            interactive={false}
          />
        </div>
      </div>
    </div>
  );
}
