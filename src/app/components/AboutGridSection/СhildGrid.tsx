type ChildGrid = {
  img: string;
  title: string;
  subtitle: string;
};
export default function СhildGrid({ img, title, subtitle }: ChildGrid) {
  return (
    <div className="flex w-full sm:justify-normal sm:w-[calc(50%-16px)] lg:w-[calc(33.33%-16px)] md:mb-[40px] justify-center">
      <img
        src={img}
        alt=""
        className="border-solid border-borderWhite p-[18px] border-[1px] rounded-lg mr-4 h-[60px] w-[60px]"
      />
      <div className="flex flex-col justify-between ">
        <h4 className="text-textBlack font-normal text-xl leading-6 mb-2 ">
          {title}
        </h4>
        <h4 className="max-w-[313px] text-textGray font-normal text-base leading-5 ">
          {subtitle}
        </h4>
      </div>
    </div>
  );
}
