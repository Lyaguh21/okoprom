type TableProduct = {
  left: string;
  right: string;
};
export default function TableProduct({ left, right }: TableProduct) {
  return (
    <li className="flex justify-between text-textGray font-normal text-base py-[12px]">
      <h4>{left}</h4>
      <h4 className="text-textBlack dark:text-white">{right}</h4>
    </li>
  );
}
