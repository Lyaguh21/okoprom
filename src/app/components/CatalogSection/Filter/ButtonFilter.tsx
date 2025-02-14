type ButtonFilter = {
  children: React.ReactNode;
  isActive: boolean;
};
export default function ButtonFilter({ children, isActive }: ButtonFilter) {
  return (
    <button
      className="text-[16px] font-Golos rounded-lg w-full h-[44px] py-2 px-3 mb-2    "
      style={{
        background: isActive ? "#202226" : "#FFF",
        color: isActive ? "#FFF" : "#161616",
      }}
    >
      {children}
    </button>
  );
}
