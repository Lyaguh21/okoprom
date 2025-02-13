import { ReactNode } from "react";

type ContactMiniSection = {
  title: string;
  children: ReactNode;
};
export default function ContactsMiniSection({
  title,
  children,
}: ContactMiniSection) {
  return (
    <div className="mb-[40px]">
      <h4 className="text-base text-textGray leading-5 mb-2">{title}</h4>
      <div className="text-textBlack text-xl leading-6 max-w-[490px]">
        {children}
      </div>
    </div>
  );
}
