type LayoutProps = {
  children: React.ReactNode;
  OnClick: React.MouseEventHandler;
};
export default function NavButton({ children, OnClick }: LayoutProps) {
  return (
    <button
      onClick={OnClick}
      className="fill-current border-[1px] group border-borderWhite bg-secondColor dark:bg-darkMainButton dark:border-darkMainButton   rounded-lg text-textBlack h-11 w-11 p-[10px] transition-all hover:bg-buttonHover hover:ease-in-out hover:duration-500 active:duration-150 active:bg-secondColor "
    >
      {children}
    </button>
  );
}
