"use client";

import { Bounce, toast } from "react-toastify";
import { buy } from "../../../../Data";

export default function ContactForm() {
  const buyMessege = () =>
    toast.success("Спасибо за покупку !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <div className="md:px-[72] px-4 lg:px-[40px] py-[120px] font-Golos">
      <div className="bg-textBlack rounded-[20px] flex flex-col px-[12px] sm:px-11 pt-[60px] pb-[30px] flex-wrap md:flex-nowrap">
        <h2 className="mb-[40px] text-white text-[24px]">Контактные данные</h2>
        <div className="flex w-full gap-10">
          <div className="flex flex-col basis-1/2 h-[180px] justify-between ">
            <input
              className={
                "FeedbackFormInput h-[58px] hover:pt-0 focus:pt-4 hover:placeholder:text-sm :transition-all ease-in-out duration-300"
              }
              placeholder={"ФИО"}
            />
            <input
              className={
                "FeedbackFormInput h-[58px] hover:pt-0 focus:pt-4 hover:placeholder:text-sm :transition-all ease-in-out duration-300"
              }
              placeholder={"Адрес доставки"}
            />
            <div className="flex mt-">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-[20px] h-[20px] bg-none rounded-none border-white border-1 focus:ring-white accent-white dark:focus:ring-white dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-md font-medium text-white leading-[20px]"
              >
                Доставка до города
              </label>
            </div>
          </div>
          <div className="flex flex-col basis-1/2 h-[138px] justify-between">
            <input
              className={
                "FeedbackFormInput h-[58px] hover:pt-0 focus:pt-4 hover:placeholder:text-sm :transition-all ease-in-out duration-300"
              }
              placeholder={"Ваш номер"}
            />
            <input
              className={
                "FeedbackFormInput h-[58px] hover:pt-0 focus:pt-4 hover:placeholder:text-sm :transition-all ease-in-out duration-300"
              }
              placeholder={"Номер паспорта"}
            />
          </div>
        </div>
        <div className="flex mt-2 justify-between">
          <div className="flex">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-[20px] h-[20px] bg-none rounded-none border-white border-1 focus:ring-white accent-white dark:focus:ring-white dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-md font-medium text-white leading-[20px]"
            >
              Cогласен с политикой конфиденциальности
            </label>
          </div>
          <div className="flex justify-end">
            <h2 className="text-white font-medium  hover:text-textGray cursor-pointer ">
              <div
                className="flex w-[100px] justify-between"
                onClick={buyMessege}
              >
                Заказать
                {buy}
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
