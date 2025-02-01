type LayoutProps = {
  children: React.ReactNode;
};
export default function BlackButton({ children }: LayoutProps) {
  return (
    <button className=" text-secondColor font-Golos font-normal text-base bg-textBlack px-5  h-11 rounded-lg">
      {children}
    </button>
  );
}
