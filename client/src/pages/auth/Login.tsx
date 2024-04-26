import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as GoogleIcon } from "./path/to/heroicons/google.svg"; // Ensure path is correct

// interface ILoginState {
//   email: string;
//   password: string;
//   emailError: string;
//   passwordError: string;
// }

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const validateEmail = (): boolean => {
    if (!email) {
      setEmailError("من فضلك ادخل الحساب الخاص بك");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("من فضلك ادخل حساب اليكتروني صحيح");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (): boolean => {
    if (!password) {
      setPasswordError("من فضلك ادخل الرقم السري");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log("Login successful");
      // Process login here
    }
  };

  return (
    <div className="h-screen flex">
      <div className="hidden lg:flex w-full lg:w-1/2 justify-around items-center bg-white">
        <img src="/public/signin.svg" alt="Sign In" />
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24 ">
          <form
            className="bg-white rounded-md shadow-2xl p-5"
            onSubmit={handleSubmit}
          >
            <h1 className="text-gray-800 font-bold text-2xl mb-1 text-right text-primary">
              اهلا
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-8 text-right">
              مرحبا بعودتك
            </p>
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <input
                id="email"
                className="pl-2 w-full outline-none border-none text-right"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                placeholder="الايميل"
              />
            </div>
            {emailError && (
              <div className="text-red-500 text-sm text-right mb-4 -translate-y-2">
                {emailError}
              </div>
            )}
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <input
                className="pl-2 w-full outline-none border-none text-right"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
                placeholder="الرقم السري"
              />
            </div>
            {passwordError && (
              <div className="text-red-500 text-sm text-right mb-4 -translate-y-2">
                {passwordError}
              </div>
            )}
            <button
              type="submit"
              className="block  w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:primary  transition-all duration-500 text-white font-semibold mb-2"
            >
              تسجيل الدخول
            </button>
            <button
              type="button"
              className="block w-full bg-foreground mt-5 py-2 rounded-2xl hover:bg-primary  transition-all duration-500 text-white font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
                className="w-7 h-7 text-center mx-auto"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </button>
            <div className="flex justify-between mt-4">
              <Link
                to={"/signup"}
                className="text-sm ml-2  cursor-pointer hover:underline duration-500 transition-all text-right w-full"
              >
                لا تملك حساب ؟{" "}
                <span className="text-primary">قم بانشاء حساب الان</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
