"use client";

import MainButton from "../Buttons/MainButton";
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

function FeedbackForm() {
  const FeedBackFormService = new FeedbackFormService();

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFeedbackForm)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        className={"FeedbackFormInput mb-[20px]"}
                        placeholder={"Ваше имя"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        className={"FeedbackFormInput mb-[20px]"}
                        placeholder={"+ 7 (___) __ __"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        className={"FeedbackFormInput mb-[20px]"}
                        placeholder={"E-mail (необязательно)"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className=" font-Golos font-semibold text-base bg-secondColor dark:bg-darkMainButton dark:hover:text-textBlack dark:text-white px-5  mr-[10px] h-11 rounded-lg text-textBlack transition-all hover:bg-buttonHover hover:ease-in-out hover:duration-500 active:bg-buttonActive active:text-secondColor  active:ease-out active:duration-150 disabled:cursor-not-allowed disabled:bg-buttonActive disabled:active:text-textBlack disabled:transition-colors disabled:ease-in-out disabled:duration-500"
              >
                Отправить
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default FeedbackForm;
