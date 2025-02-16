"use client";
import Delivery from "../components/Delivery/Delivery";
import { GatantedText } from "../../../Text";
import LiquidChrome from "../components/Delivery/LiquidChrome";

export default function garanted() {
  return (
    <div className="pt-[60px] mx-4 md:mx-[72px] lg:mx-[40px] font-Golos border-t-[1px]  border-borderWhite dark:border-textBlack">
      <h4 className="font-medium text-[40px] leading-[48px] dark:text-white">
        Гарантия
      </h4>
      <div className="flex flex-row">
        <div className="basis-1/2">
          <Delivery
            title={GatantedText[0].title}
            subtitle={GatantedText[0].subtitle}
          />
          <Delivery
            title={GatantedText[1].title}
            subtitle={GatantedText[1].subtitle}
          />
          <Delivery
            title={GatantedText[2].title}
            subtitle={GatantedText[2].subtitle}
          />
          <Delivery
            title={GatantedText[3].title}
            subtitle={GatantedText[3].subtitle}
          />
        </div>
        <div className="basis-1/2 pt-[60px]">
          <LiquidChrome
            baseColor={[0.1, 0.1, 0.1]}
            speed={0.2}
            amplitude={0.59}
            interactive={false}
          />
        </div>
      </div>
    </div>
  );
}
