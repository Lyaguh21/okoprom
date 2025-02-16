type Delivery = {
  title: string;
  subtitle: React.ReactNode;
};
export default function Delivery({ title, subtitle }: Delivery) {
  return (
    <div className="mt-[60px] max-w-[592px]">
      <h4 className="mb-6 text-2xl leading-7 font-medium text-textBlack dark:text-white">
        {title}
      </h4>
      {subtitle}
    </div>
  );
}
