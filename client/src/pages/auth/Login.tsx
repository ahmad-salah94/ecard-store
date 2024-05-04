import React, { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import Loading from "@/components/common/Loading";
import axios from "axios";
import { BASE_URL } from "@/redux/slices/auth";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  // data from inputs in a state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  // loading state
  const [loading, setLoading] = useState<boolean>(false);

  const { t } = useTranslation();
  const navigate = useNavigate();

  // validating the login data
  const validateEmail = (): boolean => {
    if (!email) {
      setEmailError(t("sign_in_enter_email_text"));
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(t("sign_in_enter_a_valid_email_text"));
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (): boolean => {
    if (!password) {
      setPasswordError(t("sign_in_enter_password_text"));
      return false;
    }
    setPasswordError("");
    return true;
  };

  // if not authenticated then go to main page
  useLayoutEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGoogleLogin = async (resData: any) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/login`, {
        email: resData,
        password,
      });
      setLoading(false);
      localStorage.setItem("token", response.data.access_token);

      if (response.data.user) {
        toast.success(t("sign_in_successful_signin_toast"));

        // Redirect the user to the home page
        window.location.reload();
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error(t("sign_in_failed_signin_toast"));
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      setLoading(true);
      try {
        const response = await axios.post(`${BASE_URL}/api/auth/login`, {
          email,
          password,
        });
        setLoading(false);
        localStorage.setItem("token", response.data.access_token);

        if (response.data.user) {
          toast.success(t("sign_in_successful_signin_toast"));

          // Redirect the user to the home page
          window.location.reload();
        }
      } catch (error) {
        console.error("Error occurred:", error);
        toast.error(t("sign_in_failed_signin_toast"));
        setLoading(false);
      }
    }
  };

  return (
    <div className="h-screen flex">
      <ToastContainer />
      {loading && <Loading />}
      <div className="hidden lg:flex w-full lg:w-1/2 justify-around items-center bg-white">
        <motion.img
          src="/public/signin.svg"
          alt="Sign In"
          initial={{ opacity: 0, x: -150 }} // Initial opacity and translation
          whileInView={{ opacity: 1, x: 0 }} // Animation based on inView
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24 ">
          <motion.form
            className="bg-white rounded-md shadow-2xl p-5"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 70 }} // Initial opacity and translation
            whileInView={{ opacity: 1, y: 0 }} // Animation based on inView
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-gray-800 font-bold text-2xl mb-1 text-right text-primary">
              {t("sign_in_title")}
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-8 text-right">
              {t("sign_in_text")}
            </p>
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <input
                id="email"
                className="pl-2 w-full outline-none border-none text-right"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                placeholder={t("sign_in_email_text")}
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
                placeholder={t("sign_in_password_text")}
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
              {t("sign_in_button_text")}
            </button>
            <div style={{ width: "100%" }}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  const resData = jwtDecode(credentialResponse.credential);

                  handleGoogleLogin(resData);
                }}
                onError={() => {
                  console.log("login failed");
                }}
              />
            </div>

            <div className="flex justify-between mt-4">
              <Link
                to={"/signup"}
                className="text-sm ml-2  cursor-pointer hover:underline duration-500 transition-all text-right w-full"
              >
                {t("sign_in_make_account_text")}
                <span className="text-primary">
                  {" "}
                  {t("sign_in_make_account_span")}{" "}
                </span>
              </Link>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Login;
