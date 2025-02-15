import BuyButton from "../../Buttons/BuyButton";
import TableProduct from "./TableProduct";

type Product = {
  products: object;
};
export default function Product({ products }: Product) {
  return (
    <div className="bg-secondColor rounded-2xl p-2 font-Golos lg:basis-[calc(50%-16px)]  xl:basis-[calc(33%-16px)] notebook:basis-[calc(25%-16px)]">
      <div className="bg-white rounded-xl flex justify-center items-center">
        <picture>{products.photo}</picture>
      </div>
      <div className="px-3 py-[20px]">
        <div>
          <h4 className="text-textBlack leading-5 text-base mb-1">
            {products.title}
          </h4>
          <ul className="divide-y divide-borderWhite last:divide-b last:divide-borderWhite">
            <TableProduct left="Вес" right={products.weight} />
            <TableProduct left="Двигатель" right={products.power} />
            <TableProduct left="Диам.обраб." right={products.diameter} />
          </ul>
          <h4 className="mt-8 mb-5 text-xl leading-6 font-medium">
            {products.price}
          </h4>
          <div className="flex justify-center">
            <BuyButton />
          </div>
        </div>
      </div>
    </div>
  );
}
