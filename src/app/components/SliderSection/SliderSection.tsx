import MainButton from "../Buttons/MainButton";
import NavButton from "../Buttons/NavButton";
import { back, next, slider } from "../../../../Data";
import Property from "./Property";

export default function SliderSection() {
  return (
    <div className="mx-4 md:mx-[72px] lg:mx-[40px] bg-sliderBg font-Golos rounded-2xl p-4">
      <div className="flex-col lg:flex-row flex justify-between">
        <div className="md:basis-1/2 m-[24px] mb-0 border-b-[1px] border-borderBlack">
          <h1 className="text-white font-semibold text-[40px] leading-[48px] mb-8">
            {slider[0].title}
          </h1>
          <ul className="divide-y divide-borderBlack ">
            <Property left="Диаметр обработки" right={slider[0].diameter} />
            <Property left="Размеры" right={slider[0].size} />
            <Property left="Мощность" right={slider[0].power} />
          </ul>
          <h1 className="mt-[88px] text-white text-[24px] leading-7 mb-[32px]">
            {slider[0].price}
          </h1>
        </div>
        <div className="order-first lg:order-last md:basis-1/2 bg-white dark:bg-darkMainButton rounded-2xl flex justify-center items-center p-[24px]">
          <picture>{slider[0].photo}</picture>
        </div>
      </div>
      <div className="flex justify-between mb-[24px] mx-[24px] mt-[40px]">
        <MainButton>Подробнее</MainButton>
        <div>
          <NavButton OnClick={() => undefined}>{back}</NavButton>
          <NavButton OnClick={() => undefined}>{next}</NavButton>
        </div>
      </div>
    </div>
  );
}
