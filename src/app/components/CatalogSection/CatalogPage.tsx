import { Catalog, filter } from "../../../../Data";
import MainButton from "../Buttons/MainButton";
import Product from "./Catalog/Product";
import FiltersSection from "./Filter/FiltersSection";
import { SG0061 } from "../../../../Product";
import BlackButton from "../Buttons/BlackButton";

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
      <div className="flex justify-between gap-6 flex-col lg:flex-row">
        <div className="lg:hidden">
          <BlackButton>{filter}</BlackButton>
        </div>
        <div className="hidden lg:block basis-[278px] h-[448px] basis-[278px]">
          <FiltersSection />
        </div>

        <div className="flex justify-center">
          <div className="basis-[900px] notebook:basis-[1400px] flex flex-col justify-between">
            <div className="flex flex-wrap gap-[15px] justify-between">
              <Product products={SG0061} />
              <Product products={SG0061} />
              <Product products={SG0061} />
              <Product products={SG0061} />
              <Product products={SG0061} />
              <Product products={SG0061} />
              <Product products={SG0061} />
              <Product products={SG0061} />
            </div>
            <div className="flex justify-center py-[40px]">
              <MainButton>Показать еще</MainButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
