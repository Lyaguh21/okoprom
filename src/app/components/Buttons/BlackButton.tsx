interface LayoutProps {
  children?: React.ReactNode;
  OnClick: React.MouseEventHandler;
}
export default function BlackButton(props: LayoutProps) {
  return (
    <button
      onClick={props.OnClick}
      className=" text-secondColor dark:bg-secondColor dark:text-textBlack font-Golos font-semibold text-base bg-textBlack px-5  h-11 rounded-lg hover:bg-buttonHover hover:ease-in-out hover:duration-500 active:duration-150 hover:text-textBlack active:bg-secondColor"
    >
      {props.children}
    </button>
  );
}
