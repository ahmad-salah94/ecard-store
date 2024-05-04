import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BASE_URL } from "@/redux/slices/auth";

import Loading from "@/components/common/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";

const SignUp: React.FC = () => {
  // sign up data  in states
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobilePhone, setMobilePhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [reenterPassword, setReenterPassword] = useState<string>("");

  // captcha states
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
  const [emailApiErrors, setEmailApiErrors] = useState<string[]>([]);

  // loading state
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  // generate captcha
  useEffect(() => {
    generateCaptcha();
  }, []);

  // generate captcha fn
  const generateCaptcha = () => {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    setCaptchaSolution(num1 + num2);
    setCaptchaQuestion(`${num1} + ${num2}`);
  };

  // validation
  const validate = (): boolean => {
    let isValid = true;
    // Reset errors
    setFullNameError(t("sign_up_enter_full_name_text"));
    setEmailError(t("sign_up_enter_email_text"));
    setMobilePhoneError(t("sign_up_enter_phone_number_text"));
    setAddressError(t("sign_up_enter_address_text"));
    setPasswordError(t("sign_up_enter_password_text"));
    setReenterPasswordError(t("sign_up_enter_alike_passwords_text"));
    setCaptchaError(t("sign_up_false_captcha_text"));

    // Full name validation
    if (!fullName.trim()) {
      setFullNameError(t("sign_up_enter_full_name_text"));
      isValid = false;
    }

    // Email validation
    if (!email.trim()) {
      setEmailError(t("sign_up_enter_email_text"));
      isValid = false;
    }

    // Mobile phone validation
    if (!mobilePhone.trim()) {
      setMobilePhoneError(t("sign_up_enter_phone_number_text"));
      isValid = false;
    }

    // Address validation
    if (!address.trim()) {
      setAddressError(t("sign_up_enter_address_text"));
      isValid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError(t("sign_up_enter_password_text"));
      isValid = false;
    } else if (!/^(?=.*[0-9])(?=.*[a-zA-Z])(.{8,})$/.test(password)) {
      setPasswordError(t("sign_up_enter_password_text"));
      isValid = false;
    }

    // Re-enter password validation
    if (password !== reenterPassword) {
      setReenterPasswordError(t("sign_up_enter_alike_passwords_text"));
      isValid = false;
    }

    // Captcha validation
    if (!userCaptcha.trim() || parseInt(userCaptcha) !== captchaSolution) {
      setCaptchaError(t("sign_up_false_captcha_text"));
      generateCaptcha();
      isValid = false;
    }

    return isValid;
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  // handling sending data
  const handleGoogleSignUp = async () => {
    setLoading(true);
    try {
      // Replace with your actual Google OAuth endpoint
      const response = await axios.get(`${BASE_URL}/api/auth/google`);
      setLoading(false);
      console.log(response.data);
      toast.success(t("sign_uo_successful_signin_toast"));
      // Handle successful sign-up (e.g., store user data, set authentication state)
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error(t("sign_up_failed_signin_toast"));
      setLoading(false);
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const response = await axios.post(`${BASE_URL}/api/auth/register`, {
          name: fullName,
          email,
          mobilePhone,
          address,
          password,
        });
        setLoading(false);
        if (response.data.message === "User registered successfully ") {
          toast.success(t("sign_uo_successful_signin_toast"));
          setLoading(false);
        }
        if (response.data.errors) {
          if (response.data.errors.email) {
            setEmailApiErrors(response.data.errors.email);
            toast.error(t("sign_up_failed_signin_toast"));
            setLoading(false);
          }
        }
      } catch (error) {
        console.error("Error occurred:", error);
        toast.success(t("sign_up_failed_signin_toast"));
        setLoading(false);
      }
    }
  };

  return (
    <div className=" flex mt-[100px]">
      <ToastContainer />
      {loading && <Loading />}
      <div
        className="hidden lg:flex w-full lg:w-1/2
          justify-around items-center bg-white"
      >
        <motion.img
          src="/public/signup.svg"
          alt="Signup"
          initial={{ opacity: 0, x: -150 }} // Initial opacity and translation
          whileInView={{ opacity: 1, x: 0 }} // Animation based on inView
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8 ">
        <motion.div
          className="w-full px-8 md:px-32 lg:px-24 text-right "
          initial={{ opacity: 0, y: 50 }} // Initial opacity and translation
          whileInView={{ opacity: 1, y: 0 }} // Animation based on inView
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <form
            className="bg-white rounded-md shadow-2xl p-5 "
            onSubmit={handleSubmit}
          >
            <h1 className="text-gray-800 font-bold text-2xl mb-1 text-primary">
              {t("sign_up_title")}
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-8">
              {t("sign_up_text")}
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
                placeholder={t("sign_up_full_name_text")}
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
                placeholder={t("sign_up_email_text")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {emailError && (
              <div className="text-red-500 text-sm -translate-y-2 mb-4">
                {emailError}
              </div>
            )}
            {emailApiErrors &&
              emailApiErrors.map((err) => (
                <div className="text-red-500 text-sm -translate-y-2 mb-4">
                  {err == "The email has already been taken."
                    ? t("email_already_taken_message")
                    : err}
                </div>
              ))}

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
                placeholder={t("sign_up_phone_text")}
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
                placeholder={t("sign_up_address_text")}
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
                placeholder={t("sign_up_password_text")}
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
                placeholder={t("sign_up_re_password_text")}
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
              <span>{t("sign_up_captcha_text")}</span>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                placeholder={t("sign_up_captcha_text")}
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
              {t("sign_up_button_text")}
            </button>
            <button className="w-full flex justify-center items-center">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  const resData = jwtDecode(credentialResponse.credential);

                  // handleGoogleLogin(resData);
                }}
                onError={() => {
                  console.log("login failed");
                }}
              />
            </button>
            <div className="flex justify-between mt-4 text-right w-full">
              <Link
                to={"/login"}
                className="text-sm ml-2 hover:underline cursor-pointer  duration-500 transition-all w-full"
              >
                {t("sign_up_make_account_text")}{" "}
                <span className="text-primary">
                  {t("sign_up_make_account_span")}
                </span>
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
