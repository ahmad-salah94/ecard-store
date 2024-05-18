import React, { useState } from "react";
import axios from "axios";
import { FaFileUpload } from "react-icons/fa";

const DashboardAddCategory: React.FC = () => {
  const [formData, setFormData] = useState({
    parentCategory: "option1",
    arabicName: "",
    englishName: "",
    categoryImage: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "categoryImage") {
      setFormData({
        ...formData,
        categoryImage: e.target.files ? e.target.files[0] : null,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("parentCategory", formData.parentCategory);
    form.append("arabicName", formData.arabicName);
    form.append("englishName", formData.englishName);
    if (formData.categoryImage) {
      form.append("categoryImage", formData.categoryImage);
    }

    try {
      const response = await axios.post("/your-endpoint", form);
      console.log("تمت إضافة القسم بنجاح:", response.data);
    } catch (error) {
      console.error("خطأ في إضافة القسم:", error);
    }
  };

  return (
    <div className="w-full mx-auto p-4 bg-white shadow-md rounded-lg" dir="rtl">
      <form onSubmit={handleSubmit} className="space-y-4 text-lg">
        <div className="space-x-2">
          <label className="text-gray-700">يتبع ل</label>
          <div className="w-full flex items-center gap-4">
            <select
              name="parentCategory"
              value={formData.parentCategory}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
            >
              <option value="option1">خيار 1</option>
              <option value="option2">خيار 2</option>
            </select>
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">اسم القسم عربي</label>
          <div className="w-full flex items-center gap-4">
            <input
              type="text"
              name="arabicName"
              value={formData.arabicName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
              required
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">اسم القسم انجليزي</label>
          <div className="w-full flex items-center gap-4">
            <input
              type="text"
              name="englishName"
              value={formData.englishName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
              required
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">صورة القسم</label>
          <div className="w-full flex items-center gap-4">
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer  hover:text-primary w-full">
              <FaFileUpload className="w-8 h-8" />
              <span className="mt-2 text-base leading-normal">اختر ملف</span>
              <input
                type="file"
                name="categoryImage"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-indigo-900 duration-200 focus:outline-none focus:border-primary"
        >
          إضافة القسم
        </button>
      </form>
    </div>
  );
};

export default DashboardAddCategory;
