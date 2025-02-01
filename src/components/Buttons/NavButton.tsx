type LayoutProps = {
  children: React.ReactNode;
};
export default function NavButton({ children }: LayoutProps) {
  return (
    <button className="bg-secondColor mr-[10px] rounded-lg text-textBlack h-11 w-11 p-[10px]">
      {children}
    </button>
  );
}
