"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center bg-gradient-to-b from-purple-200 to-red-300 shadow-md px-6 py-4">
      <div className="flex items-center">
        <Image src="/Bot.svg" alt="Bot" width={80} height={80} />
        <div className="block md:flex p-6 bg-white rounded-xl shadow-lg items-center">
          <h1 className=" font-bold text-center text-gray-800">My Chatbot</h1>
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="w-6 h-0.5 bg-gray-700 mb-1 transition-all"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-gray-700 mb-1 transition-all"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="w-6 h-0.5 bg-gray-700 transition-all"
          />
        </button>
      </div>
      {/* For mobile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full w-full md:static md:block md:w-auto bg-white rounded-xl`}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-8 md:space-y-0 p-4">
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 hover:text-purple-700 transition-all font-bold"
          >
            <Link href="/">Login</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 hover:text-purple-700 transition-all font-bold"
          >
            <Link href="/">Register</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 hover:text-purple-700 transition-all font-bold"
          >
            <Link href="/">Contact</Link>
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
}
