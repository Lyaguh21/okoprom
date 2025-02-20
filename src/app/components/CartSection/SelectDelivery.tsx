import { MouseEventHandler } from "react";

type SelectDelivery = {
  photo: React.ReactNode;
  text: string;
  isActive: boolean;
  OnClick: MouseEventHandler;
};
export default function SelectDelivery({
  photo,
  text,
  isActive,
  OnClick,
}: SelectDelivery) {
  return (
    <button
      onClick={OnClick}
      style={{ border: isActive ? "1px solid black" : "1px solid #e9e9e9" }}
      className="flex flex-col p-[15px] hover:shadow-2xl transition-all duration-400 basis-[calc(25%-16px)]"
    >
      <picture>{photo}</picture>
      <div className="flex justify-center">
        <h4>{text}</h4>
      </div>
    </button>
  );
}
