type SectionTable = {
  left: string;
  right: string;
};
export default function SectionTable({ left, right }: SectionTable) {
  return (
    <li className="flex justify-between text-textGray font-normal text-base py-[20px] h-[88px] ">
      <h4 className="w-[128px] sm:w-[187px]">{left}</h4>
      <h4 className="w-[350px]">{right}</h4>
    </li>
  );
}
