"use client";
import Delivery from "../components/Delivery/Delivery";
import { GatantedText } from "../../../Text";
import LiquidChrome from "../components/Delivery/LiquidChrome";

export default function garanted() {
  return (
    <div className="w-full h-[1500px] relative border-y-2  border-textBlack font-Golos">
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={0.1}
        amplitude={0.59}
        interactive={false}
      />

      <div className="bg-white bg-opacity-25 border-[1px] border-[#ffffff25] shadow backdrop-blur-[15px] drop-shadow-lg rounded-2xl absolute z-10 p-4 my-[48px] ml-[40px]">
        <div className="flex">
          <h4 className="font-medium text-[40px] leading-[48px] mx-auto">
            Гарантия
          </h4>
        </div>
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
    </div>
  );
}
