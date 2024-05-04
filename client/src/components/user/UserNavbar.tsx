import { useState } from "react";
import i18n from "../../i18n/index.ts"; // Import your i18n instance for multilanguage
import avatarImage from "/public/avatar.jpg";
import BadgeImage from "/public/userBadge.png";
import notificationIcon from "/public/notification.png";
import { FaMoneyCheckAlt, FaSignOutAlt, FaTimes } from "react-icons/fa";

const UserNavbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<"ar" | "en">("ar"); // Initial language set to Arabic
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Function to toggle the visibility of profile info
  const toggleProfileInfo = () => {
    setShowProfileInfo(!showProfileInfo);
    setShowNotifications(false);
  };
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowProfileInfo(false);
  };

  // function to change the language
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLang = event.target.value as "ar" | "en";
    setSelectedLanguage(selectedLang);
    i18n.changeLanguage(event.target.value); // Change the language in the i18n instance
  };

  return (
    <nav className="px-5 py-2 flex justify-between items-center container mx-auto flex-row-reverse h-[70px] fixed top-0 bg-white shadow-lg z-50">
      <div className="text-xl font-bold text-primary">LOGO</div>

      <div className="flex">
        <div className="flex items-center">
          {/* Avatar */}
          <div className="relative">
            <img
              src={avatarImage}
              alt="Avatar"
              className="w-10 h-10 rounded-full ml-4 cursor-pointer"
              onClick={toggleProfileInfo}
            />
            {/* Profile Info */}
            {showProfileInfo && (
              <div className="absolute top-full -right-[100px] w-[150px] text-lg bg-white shadow-lg rounded-lg p-2">
                {/* Notification Icon */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary">100.00 $</span>
                  <FaMoneyCheckAlt />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p>تسجيل الخروج</p>
                  <FaSignOutAlt />
                </div>
                {/* Language Icon */}
              </div>
            )}
          </div>
          {/* Notification button */}
          <button className="mx-4 relative" onClick={toggleNotifications}>
            <img
              src={notificationIcon}
              alt="Notifications"
              className="w-6 h-6"
            />
            {/* Notifications */}
            {showNotifications && (
              <div className="absolute top-[120%] -right-[260px] w-[300px] text-lg bg-white shadow-xl rounded-lg p-2">
                <div className="flex items-center justify-between mb-2">
                  <FaTimes onClick={toggleNotifications} />
                  <p>الاشعارات </p>
                </div>
                <hr className="mb-4" />
                <div className="flex items-center justify-between mb-2">
                  <p>Notification 1</p>
                </div>
              </div>
            )}
          </button>
        </div>
        <div>
          {/* Another image */}
          <img
            src={BadgeImage}
            alt="Another Image"
            className="w-10 h-10 rounded-full mr-4"
          />
        </div>
        <div className="block">
          {/* Language select input */}
          <select
            id="language"
            className="block p-2 border-primary rounded-md focus:outline-none bg-primary text-white"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* Burger Icon */}
    </nav>
  );
};

export default UserNavbar;
