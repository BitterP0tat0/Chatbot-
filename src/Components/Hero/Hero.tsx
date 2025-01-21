"use client";
import Link from "next/link";
import { FocusCards } from "../ui/focus-cards";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function Hero() {
  const words =
    "Chatbot makes you happy, the technology is making us to reach the new era.";
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
      title: "Learning",
      src: "/Study.jpg",
    },
  ];

  return (
    <div className="items-center p-4 bg-black md:h-screen ">
      <div className="absolute top-1/3 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-purple-500 rounded-full opacity-50 blur-2xl" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-red-500 rounded-full opacity-50  blur-2xl" />

      <div className="text-center py-4">
        <h1 className="text-white text-3xl font-bold">
          What you can do with our Bot
        </h1>
      </div>

      <div className="py-8">
        <FocusCards cards={cards} />
      </div>

      <div className="text-center items-center p-5">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-500 sm:text-7xl">
          Technology is leading our life
        </h1>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Join now for experencing the power of AI
        </p>
      </div>
      <div className=" text-white font-bold space-x-4 text-center">
        <Link
          href="/"
          className="hover:text-purple-700 transition-all duration-75"
        >
          Get started
        </Link>
        <Link
          href="/"
          className="hover:text-purple-700 transition-all duration-75"
        >
          Learn more →{" "}
        </Link>
      </div>
      <div className="relative text-center p-6 space-x-4">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}
