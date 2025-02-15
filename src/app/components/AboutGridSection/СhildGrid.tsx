type ChildGrid = {
  img: string;
  title: string;
  subtitle: string;
};
export default function СhildGrid({ img, title, subtitle }: ChildGrid) {
  return (
    <div className="flex w-full sm:justify-normal sm:w-[calc(50%-16px)] lg:w-[calc(33.33%-16px)] mb-[32px] md:mb-[40px] justify-center">
      <img
        src={img}
        alt=""
        className="border-solid border-borderWhite p-[18px] border-[1px] rounded-lg mr-4 h-[60px] w-[60px] dark:bg-white"
      />
      <div className="flex flex-col">
        <h4 className="text-textBlack font-normal text-xl leading-6 mb-2 dark:text-white">
          {title}
        </h4>
        <h4 className="max-w-[300px] text-textGray font-normal text-base leading-5 ">
          {subtitle}
        </h4>
      </div>
    </div>
  );
}
