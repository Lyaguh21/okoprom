export default function Header() {
  return (
    <header className=" w-full font-Golos ">
      <div className="bg-secondColor px-[16px] py-[12px] lg:py-[12px] lg:px-[40px] flex justify-between">
        <div className="basis-3/6 md:basis-2/6 xl:basis-3/6  flex items-center">
          <img src="src\assets\img\Logo.svg" alt="logo" />
        </div>
        <div className="basis-3/6 justify-end text-textGray pl-3 flex md:pl-0 md:justify-evenly md:basis-4/6 xl:basis-4/6">
          <div className="flex-wrap  flex w-[180px] lg:w-full lg:flex-nowrap lg:justify-between">
            <a href="" className="">
              okoprom@gmail.com
            </a>
            <a href="" className="">
              +7 (800) 707-31-01
            </a>
          </div>
          <div className="hidden w-[180px] md:block md:flex md:flex-wrap  lg:w-full lg:justify-evenly ">
            <a href="" className=" ">
              Доставка и оплата
            </a>
            <a href="">Гарантия</a>
          </div>
        </div>
      </div>
      <div>BOT</div>
    </header>
  );
}
