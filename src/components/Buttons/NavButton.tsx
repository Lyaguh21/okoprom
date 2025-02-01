type LayoutProps = {
  children: React.ReactNode;
};
export default function NavButton({ children }: LayoutProps) {
  return (
    <button className="fill-current bg-secondColor mr-[10px] rounded-lg text-textBlack h-11 w-11 p-[10px] transition-all hover:bg-buttonHover hover:ease-in-out hover:duration-500 active:duration-150 active:bg-secondColor ">
      {children}
    </button>
  );
}
