import { instagram, youtube } from "../../../../Data";

import BlackButton from "../Buttons/BlackButton";
import NavButton from "../Buttons/NavButton";
import ContactsMiniSection from "./ContactMiniSection";
import SectionTable from "./SectionTable";

export default function ContactsMainSection() {
  return (
    <>
      <div className="font-Golos mx-[16px] md:mx-[72px] lg:mx-[40px] pt-[60px] border-t-[1px] border-secondColor dark:border-darkHeader flex-wrap flex lg:flex-nowrap justify-between ">
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
      <div className="mt-[80px] font-Golos mx-[16px] md:mx-[72px] lg:mx-[40px] ">
        <h4 className="text-textBlack text-2xl leading-7 font-medium">
          Юридическая информация
        </h4>
        <div className="flex flex-wrap lg:flex-nowrap justify-between mt-[40px] gap-10">
          <div className="basis-1/2">
            <h4 className="text-xl leading-6 text-textBlack font-medium mb-2">
              Производство
            </h4>
            <ul className="divide-y divide-borderWhite last:border-b-[1px] last:border-borderWhite">
              <SectionTable
                left="Наименование компании"
                right="Общество с ограниченной ответственностью «Окопром»"
              />
              <SectionTable left="ОГРН" right="1205000045821" />
              <SectionTable left="ИНН" right="5032318518" />
              <SectionTable
                left="Адрес производства"
                right="Россия, Московская область, д. Островцы, Тураевская улица, дом 58"
              />
              <SectionTable
                left="Почтовый адрес"
                right="143072, Московская обл., р-н Одинцовский, п. ВНИИССОК, ул. Дружбы, д. 4"
              />
            </ul>
          </div>
          <div className="basis-1/2 ">
            <h4 className="text-xl leading-6 text-textBlack font-medium mb-2">
              Продажи
            </h4>
            <ul className="divide-y divide-borderWhite last:border-b-[1px] last:border-borderWhite">
              <SectionTable
                left="Наименование компании"
                right="Общество с ограниченной ответственностью «Сином Групп»"
              />
              <SectionTable left="ОГРН" right="1177746129010" />
              <SectionTable left="ИНН" right="7726396387" />
              <SectionTable
                left="Адрес производства"
                right="Россия, Московская область, д. Островцы, Тураевская улица, дом 58"
              />
              <SectionTable
                left="Почтовый адрес"
                right="115191, г. Москва, пер. Духовской, д. 17, пом. 1"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
