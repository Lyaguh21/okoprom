import MainButton from "../Buttons/MainButton";
import NavButton from "../Buttons/NavButton";
import BlackButton from "../Buttons/BlackButton";

export default function Header() {
  return (
    <header className=" w-full font-Golos ">
      <div className="bg-secondColor px-[16px] py-[12px] md:px-[72px] lg:py-3 lg:px-10 flex justify-between">
        <div className="basis-3/6 md:basis-2/6 xl:basis-3/6  flex items-center min-w-[119px]">
          <img src="src\assets\img\Logo.svg" alt="logo" />
        </div>
        <div className="basis-3/6 justify-end text-textGray  flex md:pl-0 md:justify-evenly md:basis-4/6 xl:basis-4/6">
          <div className="flex-wrap justify-center bigPhone:justify-normal flex w-[180px] lg:w-full lg:max-w-[346px] lg:flex-nowrap lg:justify-between xl:justify-evenly xl:max-w-[460px]">
            <a href="" className="">
              okoprom@gmail.com
            </a>
            <a href="" className="">
              +7 (800) 707-31-01
            </a>
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
          <MainButton>Главная</MainButton>
          <MainButton>Каталог</MainButton>
          <MainButton>О компании</MainButton>
          <MainButton>Контакты</MainButton>
        </div>
        <div className="flex  md:justify-start sm:basis-1/3 md:basis-3/4 lg:justify-evenly lg:basis-2/4 lg:flex-nowrap lg:mt-0 lg:max-w-[420px] md:mt-3">
          <div className="">
            <NavButton>
              <img src="src\assets\img\Search.svg" alt="" />
            </NavButton>
            <NavButton>
              <img src="src\assets\img\Cart.svg" alt="" />
            </NavButton>
          </div>
          <div className="hidden md:block">
            <BlackButton>Запросить консультацию</BlackButton>
          </div>
        </div>
        <div className="md:hidden">
          <NavButton>
            <img src="src\assets\img\menu.svg" alt="" />
          </NavButton>
        </div>
      </nav>
    </header>
  );
}
