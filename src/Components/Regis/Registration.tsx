"use client";
import { useForm } from "react-hook-form";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { userName: "", userPassword: "", userEmail: "" },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert("Login successful!");
  };
  return (
    <div className="flex justify-center items-center h-screen w-auto bg-gradient-to-tr from-gray-600 via-slate-600 to-purple-950">
      <div className="bg-black w-96 text-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl mb-6 text-center font-semibold">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-6">
            <label
              htmlFor="userName"
              className="block mb-2 text-lg font-medium"
            >
              Username
            </label>
            <input
              id="userName"
              type="text"
              placeholder="Enter your username"
              {...register("userName", { required: "Username is required" })}
              className={`w-full p-3 rounded text-black border-2 ${
                errors.userName ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.userName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.userName.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="userPassword"
              className="block mb-2 text-lg font-medium"
            >
              Password
            </label>
            <input
              id="userPassword"
              type="password"
              placeholder="Enter your password"
              {...register("userPassword", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className={`w-full p-3 rounded text-black border-2 ${
                errors.userPassword ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.userPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.userPassword.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="userEmail"
              className="block mb-2 text-lg font-medium"
            >
              Email
            </label>
            <input
              id="userEmail"
              type="email"
              placeholder="Enter your email"
              {...register("userEmail", {
                required: true,
              })}
              className={`w-full p-3 rounded text-black border-2 ${
                errors.userEmail ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.userEmail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.userEmail.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded w-full font-medium hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="text-gray-400 text-sm text-center mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
