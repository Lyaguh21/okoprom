import { Bounce, toast } from "react-toastify";
import BlackButton from "../Buttons/BlackButton";
import Modal from "./Modal";

interface ModalForm {
  isOpen: boolean;
  toggle: () => void;
}

const acceptModal = () =>
  toast.success("Ваша заявка получена !", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

function acceptForm(close) {
  acceptModal();
  close();
}

export default function ModalForm(props: ModalForm) {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <div className="flex flex-wrap md:flex-nowrap justify-between">
        <div className="mb-4 md:mb-0 basis-full md:basis-1/2">
          <h2 className="text-[32px] mb-[20px] md:w-[297px] text-textBlack font-medium">
            Будем рады ответить на все интересующие вопросы
          </h2>
          <h3 className="text-textGray text-base md:w-[297px]">
            Оставьте заявку и мы вам вскоре позвоним и проконсультируем по всем
            интересующим вопросам
          </h3>
        </div>
        <div className="flex flex-col basis-full md:basis-1/2 h-[280px]  justify-between">
          <div className="h-[192px] flex gap-5 flex-col">
            <input
              className={
                "ModalFormInput h-[58px] items-start hover:pt-0 focus:pt-4 hover:placeholder:text-sm :transition-all ease-in-out duration-300"
              }
              placeholder={"Ваше Имя"}
            />
            <input
              className={
                "ModalFormInput h-[58px] center hover:pt-0 focus:pt-4 hover:placeholder:text-sm :transition-all ease-in-out duration-300"
              }
              placeholder={"Ваш номер"}
            />
          </div>
          <div className="w-full flex justify-center">
            <div className="flex flex-col max-w-[240px] h-[72px] justify-center">
              <BlackButton OnClick={() => acceptForm(props.toggle)}>
                Отправить данные
              </BlackButton>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
