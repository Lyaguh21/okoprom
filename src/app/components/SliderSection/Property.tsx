type Property = {
  left: string;
  right: string;
};
export default function Property({ left, right }: Property) {
  return (
    <li className="flex justify-between text-textGray font-normal text-base py-[12px]  max-w-[451px] ">
      <h4>{left}</h4>
      <h4>{right}</h4>
    </li>
  );
}
