import BuyButton from "../../Buttons/BuyButton";
import TableProduct from "./TableProduct";

type Product = {
  products: {
    photo: React.ReactNode;
    title: string;
    weight: string;
    power: string;
    diameter: string;
    price: string;
    discount?: string;

    discount10?: boolean;
    armor?: boolean;
    press?: boolean;
  };
};
export default function Product({ products }: Product) {
  return (
    <div className="bg-secondColor dark:bg-darkMainButton rounded-2xl p-2 font-Golos basis-full sm:basis-[calc(50%-16px)]  xl:basis-[calc(33%-16px)] notebook:basis-[calc(25%-16px)]">
      <div className="z-10 absolute p-2 gap-1 flex">
        <div
          style={{ display: products.discount10 ? "flex" : "none" }}
          className="bg-[#D21924] text-white w-[49px] h-[24px] rounded-lg flex justify-center items-center "
        >
          <h4 className="text-[14px] ">-10%</h4>
        </div>
        <div
          style={{ display: products.armor ? "flex" : "none" }}
          className="bg-[#2949B5] text-white w-[59px] h-[24px] rounded-lg flex justify-center items-center "
        >
          <h4 className="text-[14px] ">Броня</h4>
        </div>
        <div
          style={{ display: products.press ? "flex" : "none" }}
          className="bg-[#308D77] text-white w-[59px] h-[24px] rounded-lg flex justify-center items-center "
        >
          <h4 className="text-[14px] ">Пресс</h4>
        </div>
      </div>
      <div className="bg-white dark:bg-textBlack rounded-xl flex justify-center items-center">
        <picture>{products.photo}</picture>
      </div>
      <div className="px-3 py-[20px]">
        <div>
          <h4 className="text-textBlack leading-5 text-base mb-1 dark:text-white">
            {products.title}
          </h4>
          <ul className="divide-y divide-borderWhite last:divide-b last:divide-borderWhite">
            <TableProduct left="Вес" right={products.weight} />
            <TableProduct left="Двигатель" right={products.power} />
            <TableProduct left="Диам.обраб." right={products.diameter} />
          </ul>
          <div className="flex justify-between mt-8 mb-5 w-[152px]">
            <h4 className=" text-xl leading-6 font-medium dark:text-white">
              {products.price}
            </h4>
            <h4 className="text-[14px] leading-4 font-normal text-textGray pt-[6px]">
              <del>{products.discount}</del>
            </h4>
          </div>

          <div className="flex justify-center">
            <BuyButton />
          </div>
        </div>
      </div>
    </div>
  );
}
