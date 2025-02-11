import LogoSection from "./LogoSection";
import VtorTechMix from "../../../../Data";

export default function AboutUsSection() {
  return (
    <div className="w-full px-4 md:px-[72px] lg:px-[40px] font-Golos">
      <div className="flex flex-wrap xl:flex-nowrap">
        <div className="basis-full xl:basis-2/3 p-[40px] rounded-2xl bg-secondColor dark:bg-darkMainButton flex flex-col justify-between">
          <h1 className="text-textBlack text-[40px] font-normal dark:text-white">
            Почему именно мы?
          </h1>
          <h4 className="text-textGray font-normal text-base max-w-[550px] mt-[40px]">
            За долгое время работы в этой области у нас более одной тысячи
            клиентов в базе в том числе и представленные выше.
            В основном это компании по переработке вторсырья.
            <br />
            <br /> Мы уже прошли тот путь который вам предстоит пройти после
            приобретения нашей продукции и лучше подскажем: что вам лучше
            подойдет, чего надо избегать и как более эффективно
            использовать то что есть.
          </h4>
        </div>
        <div className=" justify-between mt-4 w-full xl:basis-1/3 xl:min-w-[610px] flex flex-wrap gap-4 xl:pl-4 xl:mt-0 ">
          <LogoSection
            photo={<img src="\image\aboutUsSection\IIF.png" alt="" />}
          />
          <LogoSection
            photo={<img src="\image\aboutUsSection\mkm.png" alt="" />}
          />
          <LogoSection
            photo={<img src="\image\aboutUsSection\Olimp.png" alt="" />}
          />
          <LogoSection
            photo={<img src="\image\aboutUsSection\VtorTechMix.png" alt="" />}
          />
          <LogoSection
            photo={<img src="\image\aboutUsSection\YMZ.png" alt="" />}
          />
          <LogoSection
            photo={<img src="\image\aboutUsSection\VtorCherMet.png" alt="" />}
          />
        </div>
      </div>
    </div>
  );
}
