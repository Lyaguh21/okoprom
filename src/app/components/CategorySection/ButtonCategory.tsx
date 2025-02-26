import { ReactNode } from "react";

type ButtonCategory = {
  title: string;
  photo: ReactNode;
};
export default function ButtonCategory({ title, photo }: ButtonCategory) {
  return (
    <div className="childrenCategory h-[356px] xl:h-[384px] xl:min-w-[389px] w-full  sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] dark:bg-darkMainButton dark:text-white dark:border-white">
      <a href="#" className="flex flex-col justify-between">
        <div className="flex justify-center">
          <h3 className="font-medium text-[24px] leading-7">{title}</h3>
        </div>

        <picture className="flex justify-center">{photo}</picture>
      </a>
    </div>
  );
}
