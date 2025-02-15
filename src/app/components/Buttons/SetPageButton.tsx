type LayoutProps = {
  children: React.ReactNode;
  OnClick?: React.MouseEventHandler;
  isActive: boolean;
};
export default function SetPageButton({
  children,
  OnClick,
  isActive,
}: LayoutProps) {
  return (
    <button
      style={{
        background: isActive ? "#cdced1" : undefined,
        color: isActive ? "#161616" : undefined,
      }}
      onClick={OnClick}
      className="font-Golos font-semibold text-base bg-secondColor dark:bg-darkMainButton dark:hover:text-textBlack dark:text-white px-5  mr-[10px] h-11 rounded-lg text-textBlack transition-all hover:bg-buttonHover hover:ease-in-out hover:duration-500 active:bg-buttonActive active:text-secondColor  active:ease-out active:duration-150 disabled:cursor-not-allowed disabled:bg-buttonActive disabled:active:text-textBlack disabled:transition-colors disabled:ease-in-out disabled:duration-500"
    >
      {children}
    </button>
  );
}
