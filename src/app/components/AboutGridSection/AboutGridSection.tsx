import СhildGrid from "./СhildGrid";

export default function AboutGridSection() {
  return (
    <div className="mx-4 md:mx-[72px] lg:mx-[40px] font-Golos flex flex-col mb-[120px]">
      <h1 className="max-w-[852px] text-[40px] font-normal leading-[48px] text-textBlack">
        Ваш рост – наш интерес, ведь тогда нам будет к чему стремиться
      </h1>

      <div className="flex flex-wrap gap-4 justify-between pt-[60px]">
        <СhildGrid
          img="\image\aboutGrid\Service.svg"
          title="Всегда на связи"
          subtitle="Консультируем при покупке и в дальнейшем при эксплуатации нашего оборудования"
        />
        <СhildGrid
          img="\image\aboutGrid\Case.svg"
          title="Опыт в сфере"
          subtitle="Большой опыт в переработке вторсырья позволяет глубоко изучать проблемы и находить лучшие решения"
        />
        <СhildGrid
          img="\image\aboutGrid\Settings.svg"
          title="Наличие запчастей"
          subtitle="Преимуществом производства своими силами является замена любых комплектующих и ремонт при поломке"
        />
        <СhildGrid
          img="\image\aboutGrid\Delivery.svg"
          title="Доставка по всей России"
          subtitle="Отправим товар транспортной компанией или почтовым отправлением (оплата при получении)"
        />
        <СhildGrid
          img="\image\aboutGrid\Rent.svg"
          title="Аренда станков"
          subtitle="Станки можно брать на временное использование с залогом"
        />
        <СhildGrid
          img="\image\aboutGrid\garant.svg"
          title="Гарантия на всё"
          subtitle="Предоставляется гарантия сроком до 1 года со дня приобретения товара"
        />
      </div>
    </div>
  );
}
