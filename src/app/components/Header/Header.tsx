"use client";

import React from "react";
import MainButton from "../Buttons/MainButton";
import NavButton from "../Buttons/NavButton";
import BlackButton from "../Buttons/BlackButton";
import SetThemeButton from "../Buttons/SetThemeButton";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className=" w-full font-Golos whiteLink ">
      <div className="bg-secondColor dark:bg-darkHeader px-[16px] py-[12px] md:px-[72px] lg:py-3 lg:px-10 flex justify-between ">
        <div className="basis-3/6 md:basis-2/6 xl:basis-3/6  flex items-center min-w-[119px]">
          <picture>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="119"
              height="28"
              fill="none"
              viewBox="0 0 119 28"
            >
              <path
                className="dark:fill-white"
                fill="#161616"
                d="M23 4.998v17.998l-6-.002v3.002l6 .002c1.893 0 3-1.106 3-3V5c0-1.893-1.107-3.002-3-3.002l-6-.002v3zM5 22.998v-18l6-.002v-3l-6 .002C3.106 1.998 2 3.107 2 5v18c0 1.894 1.106 2.998 3 2.998l6-.002v-3z"
              ></path>
              <path
                className="dark:fill-white"
                fill="#161616"
                d="M10 10h8v8h-8zM40 20.24q-1.08 0-2.06-.32a4.7 4.7 0 0 1-1.68-1.02q-.72-.68-1.14-1.7t-.42-2.4v-.4q0-1.3.42-2.28t1.14-1.64 1.68-.98A6.2 6.2 0 0 1 40 9.16q1.08 0 2.04.34.96.32 1.68.98.74.66 1.16 1.64t.42 2.28v.4q0 1.36-.42 2.38a4.7 4.7 0 0 1-1.16 1.7q-.72.68-1.68 1.02t-2.04.34M40 18q1.12 0 1.86-.8.76-.8.76-2.4v-.4q0-1.46-.76-2.22-.74-.78-1.86-.78-1.14 0-1.88.78-.74.76-.74 2.22v.4q0 1.62.74 2.42.74.78 1.88.78m7.192-12h2.64v7.76l3.92-4.36h3.04l-4.08 4.54 4.48 6.06h-3.08l-3.08-4.32-1.2 1.26V20h-2.64zm15.914 14.24q-1.08 0-2.06-.32a4.7 4.7 0 0 1-1.68-1.02q-.72-.68-1.14-1.7t-.42-2.4v-.4q0-1.3.42-2.28t1.14-1.64 1.68-.98a6.2 6.2 0 0 1 2.06-.34q1.08 0 2.04.34.96.32 1.68.98.74.66 1.16 1.64t.42 2.28v.4q0 1.36-.42 2.38a4.7 4.7 0 0 1-1.16 1.7q-.72.68-1.68 1.02t-2.04.34m0-2.24q1.119 0 1.86-.8.76-.8.76-2.4v-.4q0-1.46-.76-2.22-.741-.78-1.86-.78-1.14 0-1.88.78-.74.76-.74 2.22v.4q0 1.62.74 2.42.74.78 1.88.78m7.192-8.6h2.46v1.56q.399-.72 1.26-1.26.86-.54 2.18-.54 2.12 0 3.3 1.32 1.2 1.3 1.2 3.92v.4q0 2.74-1.22 4.1-1.2 1.34-3.28 1.34-1.08 0-1.92-.46a4.1 4.1 0 0 1-1.34-1.24V24h-2.64zm5.28 8.6q1.04 0 1.74-.78.7-.8.7-2.42v-.4q0-1.5-.68-2.24-.68-.76-1.76-.76-1.14 0-1.9.66-.74.64-.74 1.94v1.2q0 1.42.72 2.12.74.68 1.92.68m7.024-8.6h2.44v1.56a2.8 2.8 0 0 1 .4-.64q.26-.34.62-.58.36-.26.78-.42a2.8 2.8 0 0 1 .96-.16q.38 0 .64.04.28.04.36.08v2.34a3 3 0 0 0-.52-.14q-.3-.08-.82-.08-.6 0-1.02.2t-.7.54a2 2 0 0 0-.38.76q-.12.44-.12.92V20h-2.64zM95 20.24q-1.08 0-2.06-.32a4.7 4.7 0 0 1-1.68-1.02q-.72-.68-1.14-1.7t-.42-2.4v-.4q0-1.3.42-2.28t1.14-1.64 1.68-.98A6.2 6.2 0 0 1 95 9.16q1.08 0 2.04.34.96.32 1.68.98.74.66 1.16 1.64t.42 2.28v.4q0 1.36-.42 2.38a4.7 4.7 0 0 1-1.16 1.7q-.72.68-1.68 1.02t-2.04.34M95 18q1.12 0 1.86-.8.76-.8.76-2.4v-.4q0-1.46-.76-2.22-.74-.78-1.86-.78-1.14 0-1.88.78-.74.76-.74 2.22v.4q0 1.62.74 2.42.74.78 1.88.78m7.192-8.6h2.44v1.58q.18-.36.46-.68.3-.32.68-.58.4-.26.86-.4.48-.16 1.02-.16 1.28 0 2 .52.74.52 1.04 1.38a3.54 3.54 0 0 1 1.26-1.36q.84-.54 1.98-.54 1.701 0 2.58.98.88.96.88 2.96V20h-2.64v-6.3q0-1.26-.42-1.78-.4-.52-1.3-.52-.8 0-1.36.62-.56.6-.56 1.68V20h-2.64v-6.3q0-1.26-.42-1.78-.4-.52-1.3-.52-.8 0-1.36.62-.56.6-.56 1.68V20h-2.64z"
              ></path>
            </svg>
          </picture>
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
          <MainButton disabled={false} OnClick={() => router.push("/")}>
            Главная
          </MainButton>
          <MainButton disabled={false} OnClick={() => undefined}>
            Каталог
          </MainButton>
          <MainButton disabled={false} OnClick={() => router.push("/about")}>
            О компании
          </MainButton>
          <MainButton disabled={false} OnClick={() => undefined}>
            Контакты
          </MainButton>
        </div>
        <div className="flex  md:justify-start sm:basis-1/3 md:basis-3/4 lg:justify-between lg:basis-2/4 lg:flex-nowrap lg:mt-0 lg:max-w-[420px] md:mt-3">
          <div className="">
            <SetThemeButton />

            <NavButton OnClick={() => {}}>
              <picture>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6  dark:stroke-white dark:group-hover:stroke-textBlack"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </picture>
            </NavButton>
            <NavButton OnClick={() => {}}>
              <picture>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-copy dark:stroke-white dark:group-hover:stroke-textBlack"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M11.5 17h-5.5v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                  <path d="M15 19l2 2l4 -4" />
                </svg>
              </picture>
            </NavButton>
          </div>
          <div className="hidden md:block mr-0">
            <BlackButton>Запросить консультацию</BlackButton>
          </div>
        </div>
        <div className="md:hidden">
          <NavButton OnClick={() => {}}>
            <picture>
              <img src="/image/header/menu.svg" alt="" />
            </picture>
          </NavButton>
        </div>
      </nav>
    </header>
  );
}
