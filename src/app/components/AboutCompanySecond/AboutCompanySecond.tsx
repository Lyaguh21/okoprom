export default function AboutCompanySecond() {
  return (
    <div className="px-4 md:px-[72px] lg:px-[40px] font-Golos mt-[120px]">
      <h1 className="text-textBlack text-[40px] font-medium leading-[48px] max-w-[795px] mb-[40px] xl:mb-[60px] dark:text-white">
        Ваш рост – наш интерес, ведь тогда нам будет к чему стремиться
      </h1>
      <div className="flex gap-20 basis-1/2">
        <picture className="hidden lg:block basis-1/2">
          <img
            src="\image\bg\lines.png"
            alt=""
            className="rounded-2xl h-[564px] w-full "
          />
        </picture>
        <div className="flex flex-col justify-between xl:mr-[151px]  my-[24px] lg:basis-[500px]">
          <div>
            <h3 className=" font-medium text-2xl mb-6 leading-7 text-textBlack dark:text-white">
              Мы надежный партнер
            </h3>
            <h4 className="text-base text-textBlack xl:max-w-[491px] mb-5 xl:mb-8 dark:text-textGray">
              За все это время работы не найдется клиент который был бы оставлен
              или проигнорирован, столкнувшись с какой либо проблемой товара
              который у нас приобрел. Мы на связи всегда и разберемся с любыми
              вопросами возникшими во время эксплуатации нашего оборудования.
            </h4>
          </div>
          <div>
            <h3 className="font-medium text-2xl mb-6 leading-7  dark:text-white">
              Меняем рынок
            </h3>
            <h4 className="text-base text-textBlack xl:max-w-[491px] dark:text-textGray">
              В 2015 году было очень мало компаний занимающихся продажей или
              производством оборудования для переработки кабеля. Например по
              статистике запросов в Яндекс в то время по словам связанными с
              этими значениями, такие как “переработка кабеля”, “станки для
              разделки кабеля” и прочее было ~200 и ~350 соответсвенно. Сейчас
              эти показатели выросли в разы до 550 и 1500. Так же сейчас
              компаний продающих больше в разы, но производителей так же мало.
              Мы хотели бы это тоже изменить, развивать производство важнейшая
              задача в данной период времени для России.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
