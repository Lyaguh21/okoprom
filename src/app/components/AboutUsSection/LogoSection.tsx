import { ReactNode } from "react";
type LogoSection = {
  photo: ReactNode;
};
export default function LogoSection({ photo }: LogoSection) {
  return (
    <div className="h-[187px] rounded-2xl bg-secondColor dark:bg-darkMainButton flex justify-center items-center w-[calc(50%-16px)] md:w-[calc(33%-16px)]">
      <picture className="dark:fill-white dark:stroke-white">{photo}</picture>
    </div>
  );
}
