"use client";
import { Card, FocusCards } from "./ui/focus-cards";
export function Hero() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "C:Users\typemynameDesktopchatbotpublicBot.svg",
    },
  ];

  return <FocusCards cards={cards} />;
}
