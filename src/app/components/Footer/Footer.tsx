"use client";

import BlackButton from "../Buttons/BlackButton";
import NavButton from "../Buttons/NavButton";

export default function Footer() {
  return (
    <footer className="w-full bg-secondColor dark:bg-darkHeader font-Golos">
      <div className=" px-3 bigPhone:px-10 ">
        <div className="py-5 border-b-[1px] border-borderWhite">
          <picture>
            <img src="image/Logo.svg" alt="" className="" />
          </picture>
        </div>
      </div>

      <div className="px-3 bigPhone:px-10 py-5 bg-secondColor dark:bg-darkHeader flex flex-wrap md:flex-nowrap">
        <div className="basis-full md:basis-1/2">
          <h3 className="font-semibold mb-3 text-[24px] dark:text-white">
            Тураевское шоссе дом 17, д.
            <br />
            Островцы, Раменский район,
            <br />
            МО, Россия
          </h3>
          <h3 className="font-semibold text-[24px]  dark:text-white">
            +7 (800) 707-31-01
          </h3>
          <h3 className="font-semibold mb-4 text-[24px]  dark:text-white">
            okoprom@gmail.com
          </h3>
          <div className="flex justify-between w-[250px]">
            <BlackButton>Whatsapp</BlackButton>
            <BlackButton>Telegram</BlackButton>
          </div>
          <div className="mt-20 flex">
            <div>
              <NavButton OnClick={() => {}}>
                <picture>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="dark:stroke-white  dark:group-hover:stroke-textBlack"
                  >
                    <g clipPath="url(#clip0_8709_3572)">
                      <path
                        fill="#161616"
                        d="M12 2c2.717 0 3.056.01 4.122.06s1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.01-4.122-.06-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2m0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10m6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_8709_3572">
                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </picture>
              </NavButton>
              <NavButton OnClick={() => {}}>
                <picture>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="dark:stroke-white  dark:group-hover:stroke-textBlack"
                  >
                    <g clipPath="url(#clip0_8709_3577)">
                      <path
                        fill="#161616"
                        d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022M10 15.5l6-3.5-6-3.5z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_8709_3577">
                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </picture>
              </NavButton>
            </div>
            <p className="text-textGray text-[16px] ml-[10px]">
              Подписывайтесь на нас <br />в социальных сетях
            </p>
          </div>
        </div>
        <div className="basis-1/2 flex-wrap sm:flex-nowrap  md:justify-center flex lg:justify-evenly md:flex-wrap lg:flex-nowrap tiles ">
          <div className="mt-[30px] md:mt-0 basic-1/2 w-[240px] flex flex-col  text-textBlack justify-between lg:max-h-[300px] dark:text-white ">
            <h3 className="text-[20px] mb-4 font-medium">Наша продукция</h3>
            <a href="" className="">
              Станки для разделки кабеля
            </a>
            <a href="" className="">
              Сепараторы
            </a>
            <a href="" className="">
              Станок для разделки <br />
              теплообменников
            </a>
            <a href="" className="">
              Разделка радиаторов
            </a>
            <a href="" className="">
              Запасные части
            </a>
            <a href="" className="">
              Другое
            </a>
          </div>

          <div className=" basic-1/2 w-[240px] flex flex-col  text-textBlack justify-between lg:mt-0 lg:max-h-[300px] mt-[30px] dark:text-white  ">
            <h3 className="text-[20px] mb-4 font-medium">Информация</h3>
            <a href="" className="">
              Доставка и оплата
            </a>
            <a href="" className="">
              Гарантия
            </a>
            <a href="" className="">
              Служба контроля качества
            </a>
            <a href="" className="">
              Наше производство
            </a>
            <a href="" className="">
              О компании
            </a>
            <a href="" className="">
              Контакты
            </a>
          </div>
        </div>
      </div>

      <div className="px-3 bigPhone:px-10 text-textGray whiteLink">
        <div className="py-5 border-t-[1px] border-borderWhite flex justify-between">
          <h3>Интернет магазин "Окопром" © 2025 Все права защищены</h3>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
