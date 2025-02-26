import ChildAbout from "./ChildAbout";
import CountUp from "./CountUp";
export default function AboutCompanyFirst() {
  const first = (
    <span>
      <CountUp
        from={0}
        to={1200}
        separator=""
        direction="up"
        duration={1}
        className="count-up-text"
      />
      +
    </span>
  );
  const second = (
    <span>
      <CountUp
        from={0}
        to={6}
        separator=""
        direction="up"
        duration={1}
        className="count-up-text"
      />
    </span>
  );
  const third = (
    <span>
      <CountUp
        from={0}
        to={24}
        separator=""
        direction="up"
        duration={1}
        className="count-up-text"
      />
      /
      <CountUp
        from={0}
        to={7}
        separator=""
        direction="up"
        duration={1}
        className="count-up-text"
      />
    </span>
  );

  return (
    <>
      <div className="mx-4 md:mx-[72px] lg:mx-[40px] pt-[60px] pb-[120px] border-borderWhite dark:border-darkHeader font-Golos   border-y-[1px]">
        <h2 className="text-textBlack dark:text-white leading-[48px] text-[40px] font-semibold mb-[40px]">
          О нас
        </h2>
        <h4 className="text-textGray text-base leading-5 max-w-[592px]">
          Наша история начинается с 2015 года когда мы в первые занялись
          переработкой небольших объемов кабелей, которые у нас были накоплены
          со временем. В то время еще не былы так распространены станки для
          переработки кабеля и различные сепараторы. Мы начали с торговли такими
          аппаратами, параллельно организовав прием кабелей и различного
          вторсырья. Накопив большой опыт и знание проблем наших клиентов,
          большая часть которых так же занимались переработкой, и добавив ко
          всему этому наш личный опыт в этой сфере мы решили предложить
          некоторые свои решения этому рынку. В данный момент мы занимаемся
          производством оборудования для сепарации, автомобильных весов и
          периферии для линий.
        </h4>
      </div>
      <div className="mx-4 md:mx-[72px] lg:mx-[40px] mb-[120px] pt-[40px] flex flex-wrap gap-4 lg:gap-[50px] justify-between">
        <ChildAbout
          title="Клиентов"
          number={first}
          subtitle="За время работы в этой области у нас более одной тысячи клиентов в базе в том числе и представленные ниже"
        />
        <ChildAbout
          title="Лет в области"
          number={second}
          subtitle="Что дает контакты и прямое общение с предпринимателями, выявление прямых потребностей."
        />
        <ChildAbout
          title="Пробуем новое"
          number={third}
          subtitle="Всегда ищем новые решения, которые будут полезны нашим клиентам"
        />
      </div>
    </>
  );
}
