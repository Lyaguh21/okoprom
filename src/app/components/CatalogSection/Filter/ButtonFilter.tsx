type ButtonFilter = {
  children: React.ReactNode;
  isActive: boolean;
  OnClick: React.MouseEventHandler;
};
export default function ButtonFilter({
  children,
  isActive,
  OnClick,
}: ButtonFilter) {
  return (
    <button
      onClick={OnClick}
      className="text-[16px] font-Golos rounded-lg bg-white dark:bg-textBlack dark:text-white w-[279px] h-[44px] py-2  px-3 mb-2 transition-all duration-[450ms]"
      style={{
        background: isActive ? "#3b3f47" : undefined,
        color: isActive ? "#FFF" : undefined,
        stroke: isActive ? "#FFFFFF" : "#161616",
      }}
    >
      {children}
    </button>
  );
}
