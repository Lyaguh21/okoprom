import { z } from "zod";

export const FeedbackFormSchema = z.object({
  name: z
  .string()
    .min(3, {
      message: "Длина имени должна быть больше 3",
    })
    .nonempty({
      message: "Обязательное поле",
    }),

  phone: z
    .string()
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      "Неправильный формат номера"
    ),

  email: z
    .string()
    .email({
      message: "Неправильный формат почты",
    })
    .nonempty({
      message: "Обязательное поле",
    }),
});
