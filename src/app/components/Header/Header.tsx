"use client";

import React, { useState } from "react";
import NavButton from "../Buttons/NavButton";
import BlackButton from "../Buttons/BlackButton";
import SetThemeButton from "../Buttons/SetThemeButton";
import { close, market, menu, okopromLogo, search } from "../../../../Data";
import Link from "next/link";
import SetPageButton from "../Buttons/SetPageButton";

export default function Header() {
  const [page, setPage] = useState(`${window.location.href}`);
  const [visible, setVisible] = useState("none");

  function handleClick() {
    setVisible(visible == "none" ? "flex" : "none");
    console.log(visible);
  }
  return (
    <header className=" w-full font-Golos whiteLink">
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
            <Link
              href={"/deliveryPayment"}
              onClick={() => setPage("http://localhost:3000/deliveryPayment")}
            >
              Доставка и оплата
            </Link>
            <Link
              href={"/garanted"}
              onClick={() => setPage("http://localhost:3000/garanted")}
            >
              Гарантия
            </Link>
          </div>
        </div>
      </div>

      <nav
        className="flex justify-between px-4 py-4 md:flex-wrap md:px-[72px] lg:px-10 lg:py-5"
        style={{ display: visible == "flex" ? "none" : "flex" }}
      >
        <div className="hidden md:block">
          <Link href={"/"}>
            <SetPageButton
              isActive={page == "http://localhost:3000/" ? true : false}
              OnClick={() => setPage("http://localhost:3000/")}
            >
              Главная
            </SetPageButton>
          </Link>
          <Link href={"/catalog"}>
            <SetPageButton
              isActive={page == "http://localhost:3000/catalog" ? true : false}
              OnClick={() => setPage("http://localhost:3000/catalog")}
            >
              Каталог
            </SetPageButton>
          </Link>
          <Link href={"/about"}>
            <SetPageButton
              isActive={page == "http://localhost:3000/about" ? true : false}
              OnClick={() => setPage("http://localhost:3000/about")}
            >
              О компании
            </SetPageButton>
          </Link>
          <Link href={"/contacts"}>
            <SetPageButton
              isActive={page == "http://localhost:3000/contacts" ? true : false}
              OnClick={() => setPage("http://localhost:3000/contacts")}
            >
              Контакты
            </SetPageButton>
          </Link>
        </div>
        <div className="flex md:justify-start sm:basis-1/3 md:basis-3/4 lg:justify-between lg:basis-2/4 lg:flex-nowrap lg:mt-0 lg:max-w-[420px] md:mt-3">
          <div className="flex justify-between w-[150px] ">
            <SetThemeButton />
            <NavButton OnClick={() => handleClick()}>{search}</NavButton>
            <NavButton OnClick={() => {}}>{market}</NavButton>
          </div>
          <div className="hidden md:block pl-3 mr-0 ">
            <BlackButton>Запросить консультацию</BlackButton>
          </div>
        </div>
        <div className="md:hidden ">
          <NavButton OnClick={() => {}}>{menu}</NavButton>
        </div>
      </nav>

      <nav
        className="flex justify-between px-4 py-4 md:flex-wrap md:px-[72px] lg:px-10 lg:py-5"
        style={{ display: visible }}
      >
        <div className="flex justify-between w-full">
          <div className="flex w-full">
            <div className="bg-secondColor dark:bg-darkMainButton w-full rounded-lg border-[1px] rounded-r-none border-borderWhite dark:border-darkMainButton p-1 h-[44px] flex justify-between ">
              <input
                type="text"
                className="bg-secondColor pl-2 focus:outline-none w-full dark:bg-darkMainButton"
                placeholder="Поиск"
              />
            </div>
            <button className="fill-current border-[1px] rounded-l-none group border-borderWhite bg-secondColor dark:bg-darkMainButton dark:border-darkMainButton  mr-[10px] rounded-lg text-textBlack h-11 w-11 p-[10px] transition-all hover:bg-buttonHover hover:ease-in-out hover:duration-500 active:duration-150 active:bg-secondColor ">
              {search}
            </button>
          </div>
          <NavButton OnClick={() => handleClick()}>{close}</NavButton>
        </div>
      </nav>
    </header>
  );
}
