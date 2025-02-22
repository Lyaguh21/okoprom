// Modal.tsx

import React, { ReactNode } from "react";
import { close } from "../../../../Data";

interface ModalType {
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div
          className="z-[9999] h-full absolute w-full px-0 md:px-[100px] xl:px-[300px] top-0 bg-textBlack bg-opacity-70 flex justify-center items-center"
          onClick={props.toggle}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="block bg-white w-full  p-6 rounded-lg"
          >
            <div className="flex justify-end" onClick={props.toggle}>
              {close}
            </div>
            <div className="px-[40px] py-[60px] pt-[36px]">
              {props.children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
