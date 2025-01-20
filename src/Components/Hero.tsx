"use client";
import { FocusCards } from "./ui/focus-cards";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Hero() {
  const words =
    "Chatbot makes you happy, the technology is making us to reach the new era";
  const cards = [
    {
      title: "AI Girlfriend",
      src: "/miku.jpeg",
    },
    {
      title: "Robot friend",
      src: "/CuteBot.jpg",
    },
    {
      title: "AI Girlfriend",
      src: "/miku.jpeg",
    },
    {
      title: "AI Girlfriend",
      src: "/miku.jpeg",
    },
    {
      title: "AI Girlfriend",
      src: "/miku.jpeg",
    },
    {
      title: "AI Girlfriend",
      src: "/miku.jpeg",
    },
  ];

  return (
    <div className="items-center p-4 bg-black">
      <div className="absolute top-1/3 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-purple-500 rounded-full opacity-50 blur-2xl" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-red-500 rounded-full opacity-50  blur-2xl" />

      <div className="text-center">
        <h1 className="text-white text-3xl font-bold">
          What you can do with our Bot
        </h1>
      </div>

      <div className="py-4">
        <FocusCards cards={cards} />
      </div>
      <div className="relative text-center p-6">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}
