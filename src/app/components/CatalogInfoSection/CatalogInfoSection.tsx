import СhildGrid from "../AboutGridSection/СhildGrid";

export default function CatalogInfoSection() {
  return (
    <div className="border-t-[1px] border-borderWhite dark:border-textBlack mx-[16px] md:mx-[72px] lg:mx-[40px] py-[60px]">
      <div className="flex justify-center">
        <div className="flex lg:justify-around flex-wrap lg:flex-nowrap gap-4">
          <СhildGrid
            img="\image\aboutGrid\Service.svg"
            title="Всегда на связи"
            subtitle="Консультируем при покупке и в дальнейшем при эксплуатации нашего оборудования"
          />
          <СhildGrid
            img="\image\aboutGrid\Delivery.svg"
            title="Доставка по всей России"
            subtitle="Отправим товар транспортной компанией или почтовым отправлением (оплата при получении)"
          />
          <СhildGrid
            img="\image\aboutGrid\garant.svg"
            title="Гарантия на всё"
            subtitle="Предоставляется гарантия сроком до 1 года со дня приобретения товара"
          />
        </div>
      </div>
    </div>
  );
}
