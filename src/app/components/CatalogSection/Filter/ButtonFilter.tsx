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
      className="text-[16px] font-Golos rounded-lg w-full h-[44px] py-2 px-3 mb-2 transition-all duration-[450ms]"
      style={{
        background: isActive ? "#202226" : "#FFF",
        color: isActive ? "#FFF" : "#161616",
        stroke: isActive ? "#FFFFFF" : "#161616",
      }}
    >
      {children}
    </button>
  );
}
