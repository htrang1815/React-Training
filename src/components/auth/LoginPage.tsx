import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    if (data) {
      localStorage.setItem("isAuth", "true");
      navigate("/welcome");
    }
  };

  return (
    <>
      <div className="bg-[#f9fafb] w-full h-[100vh]">
        <div className="flex flex-col items-center justify-center px-6 my-auto py-8 h-full">
          <div className=" bg-white rounded-lg shadow min-w-[448px] w-[30%]">
            <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-[22px] font-[700] leading-[25px] text-[#111827]">
                Sign in to your account
              </h1>
              <div className="mt-4">
                <div>
                  <label
                    className="text-[14px] font-[500] leading-[20px] block mb-[0.5rem]"
                    htmlFor="email"
                  >
                    Your email
                  </label>
                  <input
                    {...register("email", {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email format",
                      },
                      required: "This is required.",
                    })}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 mb-2"
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <span className="text-[#ec0404] mt-3 text-[14px] font-[400]">
                      {errors.email?.message?.toString()}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <label
                    className="text-[14px] font-[500] leading-[20px] block mb-[0.5rem]"
                    htmlFor="email"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 placeholder:text-[18px] mb-2"
                    placeholder="........"
                  />
                  {errors.password && (
                    <span className="text-[#ec0404] mt-3 text-[14px] font-[400]">
                      This is required.
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-start items-center ">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 flex items-center h-5">
                    <label
                      className="text-gray-500 text-[14px] dark:text-gray-300 cursor-pointer"
                      htmlFor="remember"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div>
                  <a
                    href=""
                    className="text-[14px] font-[500] text-[#2563BE] hover:underline h-5"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 bg-[#2563eb] hover:bg-[#1e51bf]"
              >
                Sign in
              </button>
              <p className="text-[14px] font-[300] leading-5 text-gray-500 dark:text-gray-400 mt-4">
                Don’t have an account yet?
                <a className="text-[14px] font-[500] text-[#2563BE] hover:underline cursor-pointer">
                  {" "}
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
