"use client";

import { useState } from "react";
import MainButton from "../Buttons/MainButton";
import { Text } from "@radix-ui/themes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/Form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FeedbackFormSchema } from "./FeedBackFormSchema";

function FeedbackForm() {
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const form = useForm<z.infer<typeof FeedbackFormSchema>>({
    resolver: zodResolver(FeedbackFormSchema),
    mode: "onChange",
  });

  return (
    <div className="md:px-[72] px-4  lg:px-[40px] py-[120px] font-Golos">
      <div className="bg-textBlack rounded-[20px] flex px-[12px] sm:px-11 py-[60px] flex-wrap md:flex-nowrap">
        <div className="md:basis-1/2">
          <div className="max-w-[451px] flex flex-col">
            <Text className="text-borderWhite font-normal text-[40px] mb-5">
              Будем рады ответить на все интересующие вопросы
            </Text>
            <Text className="text-textGray font-normal text-[16px]">
              Оставьте заявку и мы вам вскоре позвоним и проконсультируем по
              всем интересующим вопросам
            </Text>
          </div>
        </div>
        <div className="md:basis-1/2 md:px-2">
          <form action="">
            {/* <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="FeedbackFormInput mb-[20px]"
              style={{
                borderBottom:
                  name.trim().length != 0 ? "2px solid green" : undefined,
              }}
            /> */}
            <input
              type="tel"
              id="phone"
              value={phone}
              inputMode="tel"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+ 7 (___) __ __"
              className="FeedbackFormInput mb-[20px]"
              style={{
                borderBottom:
                  phone.trim().length != 0 ? "2px solid green" : undefined,
              }}
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail (необязательно)"
              className="FeedbackFormInput mb-[44px]"
              style={{
                borderBottom:
                  email.trim().length != 0 ? "2px solid green" : undefined,
              }}
            />
            <MainButton
              disabled={name.trim().length == 0 || phone.trim().length == 0}
            >
              Отправить
            </MainButton>
          </form>
        </div>
      </div>
    </div>
  );
}
export default FeedbackForm;
