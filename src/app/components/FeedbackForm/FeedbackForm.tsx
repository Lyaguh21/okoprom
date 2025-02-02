import MainButton from "../Buttons/MainButton";

export default function FeedbackForm() {
  return (
    <div className="px-4 md:px-11 py-[120px] font-Golos">
      <div className="bg-textBlack rounded-[20px] flex px-[12px] sm:px-11 py-[60px] flex-wrap md:flex-nowrap">
        <div className="md:basis-1/2">
          <div className="max-w-[451px]">
            <h1 className="text-borderWhite font-normal text-[40px] mb-5">
              Будем рады ответить на все интересующие вопросы
            </h1>
            <h3 className="text-textGray font-normal text-[16px]">
              Оставьте заявку и мы вам вскоре позвоним и проконсультируем по
              всем интересующим вопросам
            </h3>
          </div>
        </div>
        <div className="md:basis-1/2 md:px-2">
          <form action="">
            <input
              type="text"
              id="name"
              placeholder="Ваше имя"
              className="FeedbackFormInput mb-[20px]"
            />
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{7}"
              placeholder="+ 7 (___) __ __"
              className="FeedbackFormInput mb-[20px]"
            />
            <input
              type="email"
              id="email"
              placeholder="E-mail (необязательно)"
              className="FeedbackFormInput mb-[44px]"
            />
            <MainButton>Отправить</MainButton>
          </form>
        </div>
      </div>
    </div>
  );
}
