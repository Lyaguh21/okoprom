import { instagram, youtube } from "../../../../Data";

import BlackButton from "../Buttons/BlackButton";
import NavButton from "../Buttons/NavButton";
import ContactsMiniSection from "./ContactMiniSection";

export default function ContactsMainSection() {
  return (
    <div className="font-Golos mx-[16px] md:mx-[72px] mx-[40px] pt-[60px] border-t-[1px] border-secondColor dark:border-darkHeader flex-wrap flex lg:flex-nowrap justify-between ">
      <div className="basis-full lg:basis-1/3 ">
        <h1 className="mb-[40px] text-[40px] leading-[48px] text-textBlack font-medium ">
          Контакты
        </h1>
        <ContactsMiniSection title="Адрес">
          Тураевское шоссе дом 17, д. Островцы, Раменский район, МО, Россия
        </ContactsMiniSection>

        <ContactsMiniSection title="Рабочее время">
          <div className="flex justify-between max-w-[233px] mb-2">
            <h4>Пн - Пт</h4>
            <h4>8:00 до 22:00</h4>
          </div>
          <div className="flex justify-between max-w-[233px]">
            <h4>Сб - Вс</h4>
            <h4>8:00 до 20:00</h4>
          </div>
        </ContactsMiniSection>
        <ContactsMiniSection title="Email">
          okoprom@gmail.com
        </ContactsMiniSection>
        <ContactsMiniSection title="Телефон">
          +7 (800) 707-31-01
        </ContactsMiniSection>
        <ContactsMiniSection title="Мессенджеры">
          <div className="flex justify-between max-w-[240px]">
            <BlackButton>Whatsapp</BlackButton>
            <BlackButton>Telegram</BlackButton>
          </div>
        </ContactsMiniSection>
        <ContactsMiniSection title="Мы в социальных сетях">
          <div>
            <NavButton OnClick={() => undefined}>{instagram}</NavButton>
            <NavButton OnClick={() => undefined}>{youtube}</NavButton>
          </div>
        </ContactsMiniSection>
      </div>
      <div className="basis-full lg:basis-2/3 py-[40px]">
        <div className="hidden lg:block">
          <picture className=" flex items-center justify-end">
            <img src="\image\bg\mapLG.png" alt="" />
          </picture>
        </div>
        <div className="block lg:hidden">
          <picture className="flex items-center ">
            <img src="\image\bg\mapMD.png" alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
}
