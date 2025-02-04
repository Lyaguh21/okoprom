"use client";
import React from "react";
import { useTheme } from "next-themes";

type LayoutProps = {
  children: React.ReactNode;
};
export default function SetThemeButton({ children }: LayoutProps) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="fill-current border-[1px] border-borderWhite bg-secondColor mr-[10px] rounded-lg text-textBlack h-11 w-11 p-[10px] transition-all hover:bg-buttonHover hover:ease-in-out hover:duration-500 active:duration-150 active:bg-secondColor "
    >
      {children}
    </button>
  );
}
