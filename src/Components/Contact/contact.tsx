"use client";

import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Send successfully!");
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="hidden md:absolute top-1/3 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-purple-500 rounded-full opacity-50 blur-2xl" />
      <div className="hidden md:absolute top-1/2 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-red-500 rounded-full opacity-50  blur-2xl" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white shadow-md rounded-xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            {...register("firstName", { required: "First name is required" })}
            placeholder="First Name"
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}

          <input
            type="text"
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Last Name"
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </div>

        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Invalid email format",
            },
          })}
          placeholder="Email"
          className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <input
          type="text"
          {...register("number", { required: "Phone number is required" })}
          placeholder="+49 xxx xxx xxx"
          className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        {errors.number && (
          <span className="text-red-500">{errors.number.message}</span>
        )}

        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Message"
          rows={5}
          className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        {errors.message && (
          <span className="text-red-500">{errors.message.message}</span>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
