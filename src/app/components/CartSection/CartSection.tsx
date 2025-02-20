import { useState } from "react";
import { trash } from "../../../../Data";
import MainButton from "../Buttons/MainButton";
import SelectDelivery from "./SelectDelivery";
import SelectPay from "./SelectPay";

export default function CartSection() {
  const [delivery, setDelivery] = useState("none");
  const [pay, setPay] = useState("none");
  return (
    <div className="mx-4 md:mx-[72px] lg:mx-[40px] font-Golos flex flex-col ">
      <div className="pt-[60px] pb-[40px] flex-col border-y-[1px] border-borderWhite">
        <div className="flex justify-between mb-[60px]">
          <h4 className="text-textBlack text-[40px] leading-[44px] font-medium">
            Оформление заказа
          </h4>
          <MainButton>
            <div className="flex justify-between font-light">
              <h2 className="mr-3">Очистить корзину</h2>
              {trash}
            </div>{" "}
          </MainButton>
        </div>
        <h4 className="text-textBlack text-[24px] leading-[22px]">Мой заказ</h4>
      </div>
      <div className="flex mb-[120px] justify-between py-[24px]">
        <h4 className="text-textBlack text-[20px] leading-6 font-medium">
          К оплате:
        </h4>
        <h4 className="text-textBlack text-[20px] leading-6 font-medium">
          0 ₽
        </h4>
      </div>
      <div className="flex flex-col justify-between mb-[60px]">
        <h4 className="text-textBlack text-[20px] leading-6 font-medium mb-[40px]">
          Доставка:
        </h4>
        <div className="flex justify-between w-full gap-4">
          <SelectDelivery
            isActive={delivery == "sdek" ? true : false}
            OnClick={() => setDelivery("sdek")}
            photo={
              <img src="\image\Cart\PEK.png" className="h-[120px] w-[160px]" />
            }
            text="ПЭК или СДЭК"
          />
          <SelectDelivery
            isActive={delivery == "deliveryMSK" ? true : false}
            OnClick={() => setDelivery("deliveryMSK")}
            photo={
              <img
                src="\image\Cart\DeliveryMSK.png"
                className="h-[120px] w-[160px]"
              />
            }
            text="Доставка по Москве и МО"
          />
          <SelectDelivery
            isActive={delivery == "more" ? true : false}
            OnClick={() => setDelivery("more")}
            photo={
              <img
                src="\image\Cart\MoreTK.png"
                className="h-[120px] w-[160px]"
              />
            }
            text="Другие ТК"
          />
          <SelectDelivery
            isActive={delivery == "samovivoz" ? true : false}
            OnClick={() => setDelivery("samovivoz")}
            photo={
              <img
                src="\image\Cart\Samovivoz.png"
                className="h-[120px] w-[160px]"
              />
            }
            text="Самовывоз"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h4 className="text-textBlack text-[20px] leading-6 font-medium mb-[40px]">
          Оплата:
        </h4>
        <div className="flex justify-between w-full gap-4">
          <SelectPay
            isActive={pay == "online" ? true : false}
            OnClick={() => setPay("online")}
            photo={
              <img
                src="\image\Cart\online.png"
                className="h-[120px] w-[160px]"
              />
            }
            text="Онлайн"
          />
          <SelectPay
            isActive={pay == "perevod" ? true : false}
            OnClick={() => setPay("perevod")}
            photo={
              <img
                src="\image\Cart\perevod.png"
                className="h-[120px] w-[160px]"
              />
            }
            text="Банковский перевод (Юр. лица)"
          />
          <SelectPay
            isActive={pay == "priPoluchenii" ? true : false}
            OnClick={() => setPay("priPoluchenii")}
            photo={
              <img
                src="\image\Cart\priPoluchenii.png"
                className="h-[120px] w-[160px]"
              />
            }
            text="При получении"
          />
        </div>
      </div>
    </div>
  );
}
