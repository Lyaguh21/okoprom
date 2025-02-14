import { useState } from "react";
import { sale, table } from "../../../../../Data";
import ButtonFilter from "./ButtonFilter";

export default function FiltersSection() {
  const [select, setSelect] = useState("all");
  return (
    <>
      <ButtonFilter
        OnClick={() => setSelect("all")}
        isActive={select == "all" ? true : false}
      >
        <div className="flex justify-between pr-[2px]">
          <h4>Вся продукция</h4>
          {table}
        </div>
      </ButtonFilter>
      <ButtonFilter
        OnClick={() => setSelect("sail")}
        isActive={select == "sail" ? true : false}
      >
        <div className="flex justify-between">
          <h4>Скидки</h4>
          {sale}
        </div>
      </ButtonFilter>

      <ButtonFilter
        OnClick={() => setSelect("cables")}
        isActive={select == "cables" ? true : false}
      >
        <div className="flex justify-between">
          <h4>Станки для разделки кабеля</h4>
        </div>
      </ButtonFilter>

      <ButtonFilter
        OnClick={() => setSelect("separators")}
        isActive={select == "separators" ? true : false}
      >
        <div className="flex justify-between">
          <h4>Сепараторы / Дробилки</h4>
        </div>
      </ButtonFilter>

      <ButtonFilter
        OnClick={() => setSelect("heatExchangers")}
        isActive={select == "heatExchangers" ? true : false}
      >
        <div className="flex justify-between">
          <h4>Разделка теплообменников</h4>
        </div>
      </ButtonFilter>

      <ButtonFilter
        OnClick={() => setSelect("radiators")}
        isActive={select == "radiators" ? true : false}
      >
        <div className="flex justify-between">
          <h4>Разделка радиаторов</h4>
        </div>
      </ButtonFilter>

      <ButtonFilter
        OnClick={() => setSelect("sparePart")}
        isActive={select == "sparePart" ? true : false}
      >
        <div className="flex justify-between">
          <h4>Запасные части</h4>
        </div>
      </ButtonFilter>

      <ButtonFilter
        OnClick={() => setSelect("more")}
        isActive={select == "more" ? true : false}
      >
        <div className="flex justify-between">
          <h4>Другое</h4>
        </div>
      </ButtonFilter>
    </>
  );
}
