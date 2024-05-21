import React, { useState, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const ProfileSettings: React.FC = () => {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reenterNewPassword, setReenterNewPassword] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleSaveData = () => {
    // Logic to save data
  };

  const handleChangePassword = () => {
    // Logic to change password
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    // Check if file size is less than or equal to 200kb
    if (file && file.size <= 200 * 1024) {
      setProfileImage(file);
    } else {
      alert(t("profile_settings.image_size_alert"));
    }
  };

  return (
    <div className="max-w-full mx-auto bg-white shadow-md rounded px-8 pt-6 pb-[100px]">
      <div className="text-center mb-4">
        <i className="fas fa-cog text-xl"></i>
        <span className="ml-2 text-lg">{t("profile_settings.title")}</span>
      </div>
      <div className="settings-form">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              {t("profile_settings.full_name")}
            </label>
            <input
              id="fullName"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder={t("profile_settings.full_name_placeholder")}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              {t("profile_settings.email")}
            </label>
            <input
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder={t("profile_settings.email_placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              {t("profile_settings.phone_number")}
            </label>
            <input
              id="phoneNumber"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder={t("profile_settings.phone_number_placeholder")}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSaveData}
          >
            {t("profile_settings.save_data")}
          </button>
        </form>
        <form className="mt-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="oldPassword"
            >
              {t("profile_settings.old_password")}
            </label>
            <input
              id="oldPassword"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder={t("profile_settings.old_password_placeholder")}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="newPassword"
            >
              {t("profile_settings.new_password")}
            </label>
            <input
              id="newPassword"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder={t("profile_settings.new_password_placeholder")}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="reenterNewPassword"
            >
              {t("profile_settings.reenter_new_password")}
            </label>
            <input
              id="reenterNewPassword"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder={t(
                "profile_settings.reenter_new_password_placeholder"
              )}
              value={reenterNewPassword}
              onChange={(e) => setReenterNewPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleChangePassword}
          >
            {t("profile_settings.change_password")}
          </button>
        </form>
        <div className="mt-8 text-center">
          <img
            className="mx-auto w-32 h-32 object-cover rounded-full"
            src={
              profileImage
                ? URL.createObjectURL(profileImage)
                : "default-profile-image.jpg"
            }
            alt={t("profile_settings.profile_image")}
          />
          <div className="flex w-full items-center justify-center bg-grey-lighter ">
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer  hover:text-primary">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">
                {t("profile_settings.select_file")}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
