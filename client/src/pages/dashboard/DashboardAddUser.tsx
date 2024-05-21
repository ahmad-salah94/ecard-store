import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaUsers } from "react-icons/fa";

const DashboardAddUser: React.FC = () => {
  const [formData, setFormData] = useState({
    role: "client",
    fullName: "",
    email: "",
    password: "",
    phone: "",
    group: "vip",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/your-endpoint", formData);
      console.log("تمت إضافة المستخدم بنجاح:", response.data);
    } catch (error) {
      console.error("خطأ في إضافة المستخدم:", error);
    }
  };

  return (
    <div className="w-full mx-auto p-4 bg-white shadow-md rounded-lg" dir="rtl">
      <form onSubmit={handleSubmit} className="space-y-4 text-lg">
        <div className="text-lg">
          <label className="flex items-center gap-4">
            <input
              type="radio"
              name="role"
              value="client"
              checked={formData.role === "client"}
              onChange={handleChange}
              className="-indigo-500 -offset-white w-4 h-4 text-indigo-600 checked:bg-indigo-500 checked:text-white border-gray-300 rounded"
            />
            <span className="">مستخدم عادي</span>
          </label>
          <label className="flex items-center gap-4">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={formData.role === "admin"}
              onChange={handleChange}
              className="-indigo-500 -offset-white w-4 h-4 text-indigo-600 checked:bg-indigo-500 checked:text-white border-gray-300 rounded"
            />
            <span>ادمن</span>
          </label>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">الاسم الكامل</label>
          <div className="w-full flex items-center gap-4">
            <FaUser className="text-primary" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-primary text-primary"
              required
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">البريد الإلكتروني</label>
          <div className="w-full flex items-center gap-4">
            <FaEnvelope className="text-primary" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-primary text-primary"
              required
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">كلمة المرور</label>
          <div className="w-full flex items-center gap-4">
            <FaLock className="text-primary" />
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-primary text-primary"
              required
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">رقم الهاتف</label>
          <div className="w-full flex items-center gap-4">
            <FaPhone className="text-primary" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-primary text-primary"
              required
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">المجموعة</label>
          <div className="w-full flex items-center gap-4">
            <FaUsers className="text-primary" />
            <select
              name="group"
              value={formData.group}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-primary text-primary"
            >
              <option value="vip">vip </option>
              <option value="basic">عادي</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-indigo-900 duration-200 focus:outline-none  focus:border-primary"
        >
          إضافة المستخدم
        </button>
      </form>
    </div>
  );
};

export default DashboardAddUser;
