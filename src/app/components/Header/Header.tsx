"use client";

import React from "react";
import MainButton from "../Buttons/MainButton";
import NavButton from "../Buttons/NavButton";
import BlackButton from "../Buttons/BlackButton";
import SetThemeButton from "../Buttons/SetThemeButton";
import { market, menu, okopromLogo, search } from "../../../../Data";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" w-full font-Golos whiteLink ">
      <div className="bg-secondColor dark:bg-darkHeader px-[16px] py-[12px] md:px-[72px] lg:py-3 lg:px-10 flex justify-between ">
        <div className="basis-3/6 md:basis-2/6 xl:basis-3/6  flex items-center min-w-[119px]">
          {okopromLogo}
        </div>
        <div className="basis-3/6 justify-end text-textGray  flex md:pl-0 md:justify-evenly md:basis-4/6 xl:basis-4/6">
          <div className="flex-wrap justify-center bigPhone:justify-normal flex w-[180px] lg:w-full lg:max-w-[346px] lg:flex-nowrap lg:justify-between xl:justify-evenly xl:max-w-[460px]">
            <p>okoprom@gmail.com</p>
            <p>+7 (800) 707-31-01</p>
          </div>
          <div className="hidden w-[180px] md:block md:flex md:flex-wrap  lg:w-full lg:justify-evenly max-w-[360px]">
            <a href="" className=" ">
              Доставка и оплата
            </a>
            <a href="">Гарантия</a>
          </div>
        </div>
      </div>

      <nav className="flex justify-between px-4 py-4 md:flex-wrap md:px-[72px] lg:px-10 lg:py-5">
        <div className="hidden md:block">
          <Link href={"/"}>
            <MainButton>Главная</MainButton>
          </Link>
          <Link href={"/catalog"}>
            <MainButton>Каталог</MainButton>
          </Link>
          <Link href={"/about"}>
            <MainButton>О компании</MainButton>
          </Link>
          <Link href={"/contacts"}>
            <MainButton>Контакты</MainButton>
          </Link>
        </div>
        <div className="flex  md:justify-start sm:basis-1/3 md:basis-3/4 lg:justify-between lg:basis-2/4 lg:flex-nowrap lg:mt-0 lg:max-w-[420px] md:mt-3">
          <div className="">
            <SetThemeButton />

            <NavButton OnClick={() => {}}>{search}</NavButton>
            <NavButton OnClick={() => {}}>{market}</NavButton>
          </div>
          <div className="hidden md:block mr-0">
            <BlackButton>Запросить консультацию</BlackButton>
          </div>
        </div>
        <div className="md:hidden">
          <NavButton OnClick={() => {}}>{menu}</NavButton>
        </div>
      </nav>
    </header>
  );
}
