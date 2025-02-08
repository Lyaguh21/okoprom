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
          <div className="childrenCategory ]  w-full  sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] dark:bg-white dark:text-textBlack">
            <a href="#" className="flex flex-col justify-between">
              <h3 className="font-medium text-[24px] leading-7">
                Станки
                <br /> для разделки кабеля
              </h3>
              <img src="\image\categorySection\Cabel.svg" alt="" />
            </a>
          </div>

          <div className="childrenCategory   w-full  sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)]  dark:bg-white dark:text-textBlack">
            <a href="#" className="flex flex-col justify-between">
              <h3 className="font-medium text-[24px] leading-7">Сепораторы</h3>
              <img src="\image\categorySection\Seporator.svg" alt="" />
            </a>
          </div>

          <div className="childrenCategory     w-full  sm:w-[calc(50%-16px)]  md:w-[calc(33.33%-16px)]  dark:bg-white dark:text-textBlack">
            <a href="#" className="flex flex-col justify-between">
              <h3 className="font-medium text-[24px] leading-7">
                Станок для разделки теплообменников
              </h3>
              <img src="\image\categorySection\Teploobmennik.svg" alt="" />
            </a>
          </div>

          <div className="childrenCategory w-full  sm:w-[calc(50%-16px)]  md:w-[calc(33.33%-16px)]  dark:bg-white dark:text-textBlack">
            <a href="#" className="flex flex-col justify-between">
              <h3 className="font-medium text-[24px] leading-7">
                Разделка радиаторов
              </h3>
              <img src="\image\categorySection\Radiator.svg" alt="" />
            </a>
          </div>

          <div className="childrenCategory   w-full  sm:w-[calc(50%-16px)]  md:w-[calc(33.33%-16px)]  dark:bg-white dark:text-textBlack">
            <a href="#" className="flex flex-col justify-between">
              <h3 className="font-medium text-[24px] leading-7">
                Запасные части
              </h3>
              <img src="\image\categorySection\Details.svg" alt="" />
            </a>
          </div>

          <div className="childrenCategory  w-full  sm:w-[calc(50%-16px)]  md:w-[calc(33.33%-16px)]  dark:bg-white dark:text-textBlack">
            <a href="#" className="flex flex-col justify-between">
              <h3 className="font-medium text-[24px] leading-7">Другое</h3>
              <img src="\image\categorySection\More.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
