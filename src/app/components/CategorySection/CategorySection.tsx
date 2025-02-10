import ButtonCategory from "./ButtonCategory";
export default function CategorySection() {
  return (
    <div className="my-[120px] px-4 md:px-[72px] lg:px-[40px] font-Golos">
      <div className="flex flex-col">
        <div>
          <h1 className="text-[40px] font-normal text-textBlack max-w-[852px] dark:text-white">
            Сепараторы, конвейеры, шнековые транспортеры и линии для переработки
          </h1>
          <h4 className="text-[20px] font-normal text-textGray max-w-[852px] mt-[20px]">
            Мы на связи всегда и разберемся с любыми вопросами возникшими во
            время эксплуатации нашего оборудования.
          </h4>
        </div>

        <div className="flex flex-wrap mt-[60px] gap-4 justify-between">
          <ButtonCategory
            title={"Станки для разделки кабеля"}
            photo={<img src="\image\categorySection\Cabel.png" alt="" />}
          />
          <ButtonCategory
            title={"Сепараторы"}
            photo={<img src="\image\categorySection\Seporator.png" alt="" />}
          />
          <ButtonCategory
            title={"Станок для разделки теплообменников"}
            photo={
              <img src="\image\categorySection\Teploobmennik.png" alt="" />
            }
          />
          <ButtonCategory
            title={"Разделка радиаторов"}
            photo={<img src="\image\categorySection\Radiator.png" alt="" />}
          />
          <ButtonCategory
            title={"Запасные части"}
            photo={<img src="\image\categorySection\Details.png" alt="" />}
          />
          <ButtonCategory
            title={"Другое"}
            photo={<img src="\image\categorySection\More.png" alt="" />}
          />
        </div>
      </div>
    </div>
  );
}
