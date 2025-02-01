type LayoutProps = {
  children: React.ReactNode;
};
export default function MainButton({ children }: LayoutProps) {
  return (
    <button className=" font-Golos font-semibold text-base bg-secondColor px-5  mr-[10px] h-11 rounded-lg text-textBlack ">
      {children}
    </button>
  );
}
