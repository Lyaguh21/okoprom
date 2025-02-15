import MainButton from "../Buttons/MainButton";
import NavButton from "../Buttons/NavButton";
import { back, next, slider } from "../../../../Data";
import Property from "./Property";
import { useState } from "react";

export default function SliderSection() {
  const [count, setCount] = useState(0);

  const info = {
    title: slider[count].title,
    photo: slider[count].photo,
    diameter: slider[count].diameter,
    size: slider[count].size,
    power: slider[count].power,
    price: slider[count].price,
  };

  const updateInfo = (index: number) => {
    // Проверка на выход за границы массива
    if (index < 0) {
      index = slider.length - 1; // Переход к последнему элементу
    } else if (index >= slider.length) {
      index = 0; // Переход к первому элементу
    }

    setCount(index);
  };
  function handlePlus() {
    updateInfo(count + 1);
  }

  function handleMinus() {
    updateInfo(count - 1);
  }
  return (
    <div className="mx-4 md:mx-[72px] lg:mx-[40px] bg-darkMainButton font-Golos rounded-2xl p-4">
      <div className="flex-col lg:flex-row flex justify-between">
        <div className="md:basis-1/2 m-[24px] mb-0 border-b-[1px] border-borderBlack">
          <h1 className="text-white font-semibold text-[40px] leading-[48px] mb-8 h-[96px]">
            {info.title}
          </h1>
          <ul className="divide-y divide-borderBlack">
            <Property left="Диаметр обработки" right={info.diameter} />
            <Property left="Размеры" right={info.size} />
            <Property left="Мощность" right={info.power} />
          </ul>
          <h1 className="mt-[88px] text-white text-[24px] leading-7 mb-[32px]">
            {info.price}
          </h1>
        </div>
        <div className="order-first lg:order-last md:basis-1/2 bg-white dark:bg-textBlack rounded-2xl flex justify-center items-center p-[24px]">
          <picture>{info.photo}</picture>
        </div>
      </div>
      <div className="flex justify-between mb-[24px] mx-[24px] mt-[40px]">
        <MainButton>Подробнее</MainButton>
        <div>
          <NavButton OnClick={() => handleMinus()}>{back}</NavButton>
          <NavButton OnClick={() => handlePlus()}>{next}</NavButton>
        </div>
      </div>
    </div>
  );
}
