"use client";

import { toast, Bounce } from "react-toastify";
import { Text } from "@radix-ui/themes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/Form";
import { Button } from "../ui/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FeedbackFormSchema } from "./FeedBackFormSchema";
import FeedbackFormService from "@/app/servises/FeedbackFormServise";
import { useState } from "react";

function FeedbackForm() {
  const FeedBackFormService = new FeedbackFormService();
  const pass = () =>
    toast.success("Заявка отправлена", {
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
  const form = useForm<z.infer<typeof FeedbackFormSchema>>({
    resolver: zodResolver(FeedbackFormSchema),
    mode: "onChange",
  });

  async function handleFeedbackForm(
    values: z.infer<typeof FeedbackFormSchema>
  ) {
    FeedBackFormService.createFeedback({
      name: values.name,
      phone: values.phone,
      email: values.email,
    })
      .then(() => {
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const [passed, setPassed] = useState("none");

  function setVisible() {
    setPassed(passed == "none" ? "block" : "none");
    pass();
  }

  return (
    <>
      <div
        className="md:px-[72] px-4  lg:px-[40px] py-[120px] font-Golos"
        style={{ display: passed == "block" ? "none" : "block" }}
      >
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
          <div className="basis-full md:basis-1/2 md:px-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleFeedbackForm)}>
                <div className="h-[86px]">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            className={
                              "FeedbackFormInput h-[58px] hover:pt-0 focus:pt-4 hover:placeholder:text-sm :transition-all ease-in-out duration-300"
                            }
                            placeholder={"Ваше имя"}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="h-[86px]">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            className={
                              "FeedbackFormInput h-[58px] hover:pt-0 focus:pt-4 hover:placeholder:text-sm :transition-all ease-in-out duration-300"
                            }
                            placeholder={"+ 7 (___) __ __"}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="h-[86px]">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            className={
                              "FeedbackFormInput h-[58px] hover:pt-0 focus:pt-4 hover:placeholder:text-sm :transition-all ease-in-out duration-300"
                            }
                            placeholder={"E-mail (необязательно)"}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  onClick={() => setVisible()}
                  type="submit"
                  className="mt-6 font-Golos font-semibold text-base bg-secondColor dark:bg-darkMainButton dark:hover:text-textBlack dark:text-white px-5  mr-[10px] h-11 rounded-lg text-textBlack transition-all hover:bg-buttonHover hover:ease-in-out hover:duration-500 active:bg-buttonActive active:text-secondColor  active:ease-out active:duration-150 disabled:cursor-not-allowed disabled:bg-buttonActive disabled:active:text-textBlack disabled:transition-colors disabled:ease-in-out disabled:duration-500"
                >
                  Отправить
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div
        className="md:px-[72] px-4  lg:px-[40px] py-[120px] font-Golos"
        style={{ display: passed }}
      >
        <div className="bg-textBlack rounded-[20px] flex px-[12px] sm:px-11 py-[60px] flex-wrap md:flex-nowrap">
          <div className=" h-[326px] flex flex-col justify-between basis-full md:basis-1/2">
            <h1 className="text-white text-[50px] lg:text-[68px]">
              Спасибо за <br /> обращение !
            </h1>
          </div>
          <div className="flex flex-col justify-end basis-full md:basis-1/2">
            <h2 className="text-textLightGray text-[30px]">
              Мы свяжемся с вами в ближайшее время
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default FeedbackForm;
