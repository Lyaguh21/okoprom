type LayoutProps = {
  children: React.ReactNode;
  disabled: boolean;
};
export default function MainButton({
  children,
  disabled,
  OnClick,
}: LayoutProps) {
  return (
    <button
      onClick={OnClick}
      disabled={disabled}
      className=" font-Golos font-semibold text-base bg-secondColor dark:bg-darkMainButton dark:hover:text-textBlack dark:text-white px-5  mr-[10px] h-11 rounded-lg text-textBlack transition-all hover:bg-buttonHover hover:ease-in-out hover:duration-500 active:bg-buttonActive active:text-secondColor  active:ease-out active:duration-150 disabled:cursor-not-allowed disabled:bg-buttonActive disabled:active:text-textBlack disabled:transition-colors disabled:ease-in-out disabled:duration-500"
    >
      {children}
    </button>
  );
}
