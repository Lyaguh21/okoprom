type ChildAbout = {
  title: string;
  number: string;
  subtitle: string;
};
export default function ChildAbout({ title, number, subtitle }: ChildAbout) {
  return (
    <div className="sm:basis-[calc(50%-16px)] lg:basis-[calc(33.33%-28px)] font-Golos">
      <h4 className="text-textGray text-base mb-[20px] leading-5">{title}</h4>
      <h3 className="text-textBlack dark:text-white text-[40px] leading-[48px] font-medium mb-3">
        {number}
      </h3>
      <h5 className="text-textBlack dark:text-white text-base leading-5 max-w-[430px] ">
        {subtitle}
      </h5>
    </div>
  );
}
