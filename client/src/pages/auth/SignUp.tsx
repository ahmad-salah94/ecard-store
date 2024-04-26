import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobilePhone, setMobilePhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [reenterPassword, setReenterPassword] = useState<string>("");
  const [userCaptcha, setUserCaptcha] = useState<string>("");
  const [captchaSolution, setCaptchaSolution] = useState<number>(0);
  const [captchaQuestion, setCaptchaQuestion] = useState<string>("");

  //messages for validation
  const [fullNameError, setFullNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [mobilePhoneError, setMobilePhoneError] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [reenterPasswordError, setReenterPasswordError] = useState<string>("");
  const [captchaError, setCaptchaError] = useState<string>("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    setCaptchaSolution(num1 + num2);
    setCaptchaQuestion(`${num1} + ${num2}`);
  };

  const validate = (): boolean => {
    let isValid = true;
    // Reset errors
    setFullNameError("");
    setEmailError("");
    setMobilePhoneError("");
    setAddressError("");
    setPasswordError("");
    setReenterPasswordError("");
    setCaptchaError("");

    // Full name validation
    if (!fullName.trim()) {
      setFullNameError("من فضلك ادخل اسمك بالكامل");
      isValid = false;
    }

    // Email validation
    if (!email.trim()) {
      setEmailError("من فضلك ادخل الايميل");
      isValid = false;
    }

    // Mobile phone validation
    if (!mobilePhone.trim()) {
      setMobilePhoneError("من فضلك ادخل رقم الهاتف.");
      isValid = false;
    }

    // Address validation
    if (!address.trim()) {
      setAddressError("من فضلك ادخل عنوانك.");
      isValid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError("من فضلك ادخل الرقم السري.");
      isValid = false;
    } else if (!/^(?=.*[0-9])(?=.*[a-zA-Z])(.{8,})$/.test(password)) {
      setPasswordError(
        "يجب ان يحتوي الرقم السري علي 8 احرف او ارقام علي الاقل."
      );
      isValid = false;
    }

    // Re-enter password validation
    if (password !== reenterPassword) {
      setReenterPasswordError("الارقام السرية غير متشابهة.");
      isValid = false;
    }

    // Captcha validation
    if (!userCaptcha.trim() || parseInt(userCaptcha) !== captchaSolution) {
      setCaptchaError("اجابة خاطئة من فضلك ادخل الاجابة مرة اخري.");
      generateCaptcha();
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      console.log("worked");
    }
    // if (parseInt(userCaptcha) !== captchaSolution) {
    //   alert("Incorrect captcha, please try again!");
    //   setUserCaptcha("");
    //   generateCaptcha();
    //   return;
    // }
    console.log("Captcha correct, proceed with form submission");
    // Here you would typically handle the form submission, e.g., sending data to a server
  };

  return (
    <div className=" flex mt-[100px]">
      <div
        className="hidden lg:flex w-full lg:w-1/2
          justify-around items-center bg-white"
      >
        <img src="/public/signup.svg" alt="Signup" />
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8 ">
        <div className="w-full px-8 md:px-32 lg:px-24 text-right ">
          <form
            className="bg-white rounded-md shadow-2xl p-5 "
            onSubmit={handleSubmit}
          >
            <h1 className="text-gray-800 font-bold text-2xl mb-1 text-primary">
              انشاء حساب
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-8">
              الرجاء اضافة البيانات التالية
            </p>

            {/* Full Name Input */}
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                />
              </svg>
              <input
                id="fullName"
                className="pl-2 w-full outline-none border-none text-right"
                type="text"
                name="fullName"
                placeholder="الاسم بالكامل"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            {fullNameError && (
              <div className="text-red-500 text-sm -translate-y-2 mb-4">
                {fullNameError}
              </div>
            )}

            {/* Email Input */}
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                id="email"
                className="pl-2 w-full outline-none border-none text-right"
                type="email"
                name="email"
                placeholder="الايميل"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {emailError && (
              <div className="text-red-500 text-sm -translate-y-2 mb-4">
                {emailError}
              </div>
            )}

            {/* Mobile Phone Input */}
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5h12M9 3h6a2 2 0 012 2v12a2 2 0 01-2 2H9m0 0H3a2 2 0 01-2-2V5a2 2 0 012-2h6zm0 0V5m0 12v2m3-15h3m-3 0a2 2 0 014 0m-4 0a2 2 0 00-4 0"
                />
              </svg>
              <input
                id="mobilePhone"
                className="pl-2 w-full outline-none border-none text-right"
                type="text"
                name="mobilePhone"
                placeholder="رقم الهاتف"
                onChange={(e) => setMobilePhone(e.target.value)}
              />
            </div>
            {mobilePhoneError && (
              <div className="text-red-500 text-sm -translate-y-2 mb-4">
                {mobilePhoneError}
              </div>
            )}

            {/* Address Input */}
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 22l-8-8c0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9l-8 8z"
                />
              </svg>
              <input
                id="address"
                className="pl-2 w-full outline-none border-none text-right"
                type="text"
                name="address"
                placeholder="العنوان"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            {addressError && (
              <div className="text-red-500 text-sm -translate-y-2 mb-4">
                {addressError}
              </div>
            )}

            {/* Password Input */}
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 w-full outline-none border-none text-right"
                type="password"
                name="password"
                id="password"
                placeholder="الرقم السري"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {passwordError && (
              <div className="text-red-500 text-sm -translate-y-2 mb-4">
                {passwordError}
              </div>
            )}

            {/* Re-enter Password Input */}
            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H8m0 0c0 1.1-.9 2-2 2H3.9c-1.16 0-2.1-.94-2.1-2.1V5.1C1.8 4.94 2.74 4 3.9 4H6c1.1 0 2 .9 2 2v6zm0 0h8m0 0c1.1 0 2-.9 2-2V4c0-1.06-.94-1.92-2-1.92H18c-1.06 0-2 .86-2 1.92V10"
                />
              </svg>
              <input
                className="pl-2 w-full outline-none border-none text-right"
                type="password"
                name="reenterPassword"
                id="reenterPassword"
                placeholder="اعد كتابة الرقم السري"
                onChange={(e) => setReenterPassword(e.target.value)}
              />
            </div>
            {reenterPasswordError && (
              <div className="text-red-500 text-sm -translate-y-2 mb-4">
                {reenterPasswordError}
              </div>
            )}

            {/* Captcha input */}
            <div className="flex justify-between items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <span>{captchaQuestion}</span>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                placeholder="قم بحيل اللغز"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
              />
            </div>
            {captchaError && (
              <div className="text-red-500 text-sm -translate-y-2 mb-4">
                {captchaError}
              </div>
            )}

            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700  transition-all duration-500 text-white font-semibold mb-2"
            >
              انشاء حساب
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
            <div className="flex justify-between mt-4 text-right w-full">
              <Link
                to={"/login"}
                className="text-sm ml-2 hover:underline cursor-pointer  duration-500 transition-all w-full"
              >
                لديك حساب بالفعل؟{" "}
                <span className="text-primary">تسجيل الدخول</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
