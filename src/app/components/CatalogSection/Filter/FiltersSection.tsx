import { sale, table } from "../../../../../Data";
import ButtonFilter from "./ButtonFilter";

export default function FiltersSection() {
  return (
    <>
      <ButtonFilter isActive={true}>
        <div className="flex justify-between">
          <h4>Вся продукция</h4>
          {table}
        </div>
      </ButtonFilter>
      <ButtonFilter isActive={false}>
        <div className="flex justify-between">
          <h4>Скидки</h4>
          {sale}
        </div>
      </ButtonFilter>

      <ButtonFilter isActive={false}>
        <div className="flex justify-between">
          <h4>Станки для разделки кабеля</h4>
        </div>
      </ButtonFilter>

      <ButtonFilter isActive={false}>
        <div className="flex justify-between">
          <h4>Сепараторы / Дробилки</h4>
        </div>
      </ButtonFilter>

      <ButtonFilter isActive={false}>
        <div className="flex justify-between">
          <h4>Разделка теплообменников</h4>
        </div>
      </ButtonFilter>

      <ButtonFilter isActive={false}>
        <div className="flex justify-between">
          <h4>Разделка радиаторов</h4>
        </div>
      </ButtonFilter>

      <ButtonFilter isActive={false}>
        <div className="flex justify-between">
          <h4>Запасные части</h4>
        </div>
      </ButtonFilter>

      <ButtonFilter isActive={false}>
        <div className="flex justify-between">
          <h4>Другое</h4>
        </div>
      </ButtonFilter>
    </>
  );
}
