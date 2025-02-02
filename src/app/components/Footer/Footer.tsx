import BlackButton from "../Buttons/BlackButton";
import NavButton from "../Buttons/NavButton";

export default function Footer() {
  return (
    <footer className="w-full bg-secondColor font-Golos">
      <div className=" px-3 bigPhone:px-10 ">
        <div className="py-5 border-b-[1px] border-borderWhite">
          <img src="image/Logo.svg" alt="" />
        </div>
      </div>

      <div className="px-3 bigPhone:px-10 py-5 bg-secondColor flex flex-wrap md:flex-nowrap">
        <div className="basis-full md:basis-1/2">
          <h3 className="font-semibold mb-3 text-[24px]">
            Тураевское шоссе дом 17, д.
            <br />
            Островцы, Раменский район,
            <br />
            МО, Россия
          </h3>
          <h3 className="font-semibold text-[24px]">+7 (800) 707-31-01</h3>
          <h3 className="font-semibold mb-4 text-[24px]">okoprom@gmail.com</h3>
          <div>
            <BlackButton>Whatsapp</BlackButton>
            <BlackButton>Telegram</BlackButton>
          </div>
          <div className="mt-20 flex">
            <div>
              <NavButton>
                <img src="image/Instagram.svg" alt="" />
              </NavButton>
              <NavButton>
                <img src="image/YouTube.svg" alt="" />
              </NavButton>
            </div>
            <p className="text-textGray text-[16px] ml-[10px]">
              Подписывайтесь на нас <br />в социальных сетях
            </p>
          </div>
        </div>
        <div className="basis-1/2 flex-wrap sm:flex-nowrap  md:justify-center flex lg:justify-evenly md:flex-wrap lg:flex-nowrap tiles">
          <div className="mt-[30px] md:mt-0 basic-1/2 w-[240px] flex flex-col  text-textBlack justify-between lg:max-h-[300px]  ">
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

          <div className=" basic-1/2 w-[240px] flex flex-col  text-textBlack justify-between lg:mt-0 lg:max-h-[300px] mt-[30px] ">
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
