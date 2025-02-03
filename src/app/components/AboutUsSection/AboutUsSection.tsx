export default function AboutUsSection() {
  return (
    <div className="w-full px-[40px] font-Golos">
      <div className="flex flex-nowrap">
        <div className="basis-2/3 p-[40px] rounded-2xl bg-secondColor flex flex-col justify-between">
          <h1 className="text-textBlack text-[40px] font-normal ">
            Почему именно мы?
          </h1>
          <h4 className="text-textGray font-normal text-base">
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
        <div className="basis-1/3 min-w-[610px] flex flex-wrap gap-4 pl-4 ">
          <div className="childrenAbout">
            <img src="\image\IIF-RF.svg" alt="" />
          </div>
          <div className="childrenAbout">
            <img src="\image\logo-mkm.svg" alt="" />
          </div>
          <div className="childrenAbout">
            <img src="\image\ollimp.svg" alt="" />
          </div>
          <div className="childrenAbout">
            <img src="\image\VtorTehMix.svg" alt="" />
          </div>
          <div className="childrenAbout">
            <img src="\image\UMZ.svg" alt="" />
          </div>
          <div className="childrenAbout">
            <img src="\image\VtorCherMet.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
