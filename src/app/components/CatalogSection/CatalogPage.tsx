import { Catalog } from "../../../../Data";
import FiltersSection from "./Filter/FiltersSection";

export default function about() {
  return (
    <div className="mx-[16px] md:mx-[72px] lg:mx-[40px] font-Golos ">
      <div className="flex justify-between max-w-[420px] mb-[40px]">
        <h4 className="text-[40px] leading-[48px] text-textBlack dark:text-white font-medium ">
          Вся продукция
        </h4>

        <h4 className="text-[16px] text-textGray pt-5 ">
          {Catalog.allProduct} товара
        </h4>
      </div>
      <div className="flex justify-between gap-[40px]">
        <div className="basis-[300px] h-[448px]">
          <FiltersSection />
        </div>
        <div className="basis-[900px] bg-darkHeader h-[448px]"></div>
      </div>
    </div>
  );
}
