import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-gradient-to-t from-purple-200 to-red-300 bottom-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center">
        <div className="mb-4 p-4 md:mb-0 items-center">
          <h1 className="text-2xl font-bold text-white">My Chatbot</h1>
          <Image src="/Bot.svg" alt="Bot" width={80} height={80}></Image>
        </div>
        <div className="md:absolute space-x-6 mb-4 md:mb-06  justify-center items-center text-center right-0 left-0">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/" className="hover:text-blue-400">
            About
          </Link>

          <Link href="/" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
        {/*Add svg pic*/}
        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            className="hover:text-blue-400"
          ></Link>
          <Link
            href="https://twitter.com"
            className="hover:text-blue-400"
          ></Link>
          <Link
            href="www.linkedin.com/in/boxuan-chen-498886303"
            className="hover:text-blue-400"
          ></Link>
        </div>
      </div>

      <div className="p-4 text-center text-sm text-gray-500">
        © 2025 Chatbot. All rights reserved.
      </div>
    </div>
  );
}
