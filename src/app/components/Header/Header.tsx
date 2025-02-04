"use client";

import React from "react";
import MainButton from "../Buttons/MainButton";
import NavButton from "../Buttons/NavButton";
import BlackButton from "../Buttons/BlackButton";

export default function Header() {
  return (
    <header className=" w-full font-Golos whiteLink ">
      <div className="bg-secondColor px-[16px] py-[12px] md:px-[72px] lg:py-3 lg:px-10 flex justify-between">
        <div className="basis-3/6 md:basis-2/6 xl:basis-3/6  flex items-center min-w-[119px]">
          <img src="/image/Logo.svg" alt="logo" />
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
          <MainButton disabled={false}>Главная</MainButton>
          <MainButton disabled={false}>Каталог</MainButton>
          <MainButton disabled={false}>О компании</MainButton>
          <MainButton disabled={false}>Контакты</MainButton>
        </div>
        <div className="flex  md:justify-start sm:basis-1/3 md:basis-3/4 lg:justify-between lg:basis-2/4 lg:flex-nowrap lg:mt-0 lg:max-w-[420px] md:mt-3">
          <div className="">
            <NavButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </NavButton>
            <NavButton>
              <img src="/image/header/Search.svg" alt="" />
            </NavButton>
            <NavButton>
              <img src="/image/header/Cart.svg" alt="" />
            </NavButton>
          </div>
          <div className="hidden md:block mr-0">
            <BlackButton>Запросить консультацию</BlackButton>
          </div>
        </div>
        <div className="md:hidden">
          <NavButton>
            <img src="/image/header/menu.svg" alt="" />
          </NavButton>
        </div>
      </nav>
    </header>
  );
}
