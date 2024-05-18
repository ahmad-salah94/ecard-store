import React, { useState } from "react";
import axios from "axios";
import { FaFileUpload } from "react-icons/fa";

interface ProductFormData {
  category: string;
  arabicName: string;
  englishName: string;
  apiName: string;
  visibleToApi: boolean;
  currency: string;
  costPrice: number;
  sellingPrice: number;
  quantity: number;
  arabicDescription: string;
  englishDescription: string;
  productImage: File | null;
  requirement: string;
  minQuantity?: number;
  maxQuantity?: number;
  customOptions?: string;
}

const DashboardAddProduct: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    category: "option1",
    arabicName: "",
    englishName: "",
    apiName: "",
    visibleToApi: false,
    currency: "دولار",
    costPrice: 0,
    sellingPrice: 0,
    quantity: 0,
    arabicDescription: "",
    englishDescription: "",
    productImage: null,
    requirement: "بدون",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({
        ...formData,
        productImage: (e.target as HTMLInputElement).files![0],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRequirementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, requirement: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value as any);
    });

    try {
      const response = await axios.post("/your-endpoint", form);
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="w-full mx-auto p-4 bg-white shadow-md rounded-lg" dir="rtl">
      <form onSubmit={handleSubmit} className="space-y-4 text-lg">
        <div className="space-x-2">
          <label className="text-gray-700">الفئة</label>
          <div className="w-full flex items-center gap-4">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
            >
              <option value="option1">خيار 1</option>
              <option value="option2">خيار 2</option>
              <option value="option3">خيار 3</option>
            </select>
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">اسم المنتج عربي</label>
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
          <label className="text-gray-700">اسم المنتج انجليزي</label>
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
          <label className="text-gray-700">اسم المنتج API</label>
          <div className="w-full flex items-center gap-4">
            <input
              type="text"
              name="apiName"
              value={formData.apiName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
              required
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">ظاهر لـ API</label>
          <div className="w-full flex items-center gap-4">
            <input
              type="checkbox"
              name="visibleToApi"
              checked={formData.visibleToApi}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">
            العملة و سعر الكلفة وسعر البيع
          </label>
          <div className="w-full flex items-center gap-4">
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
            >
              <option value="دولار">دولار</option>
              <option value="تركيا">تركيا</option>
              <option value="يورو">يورو</option>
            </select>
            <input
              type="number"
              name="costPrice"
              placeholder="سعر الكلفة"
              value={formData.costPrice}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
              required
            />
            <input
              type="number"
              name="sellingPrice"
              placeholder="سعر البيع"
              value={formData.sellingPrice}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
              required
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">من أجل كمية</label>
          <div className="w-full flex items-center gap-4">
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
              required
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">وصف المنتج عربي</label>
          <div className="w-full flex items-center gap-4">
            <textarea
              name="arabicDescription"
              value={formData.arabicDescription}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
              required
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">وصف المنتج انجليزي</label>
          <div className="w-full flex items-center gap-4">
            <textarea
              name="englishDescription"
              value={formData.englishDescription}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
              required
            />
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">صورة المنتج</label>
          <div className="w-full flex items-center gap-4">
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:text-primary w-full">
              <FaFileUpload className="w-8 h-8" />
              <span className="mt-2 text-base leading-normal">اختر ملف</span>
              <input
                type="file"
                name="productImage"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="space-x-2">
          <label className="text-gray-700">المتطلبات</label>
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="requirement"
                value="بدون"
                checked={formData.requirement === "بدون"}
                onChange={handleRequirementChange}
                className="mr-2"
              />
              <label>بدون</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="requirement"
                value="كمية"
                checked={formData.requirement === "كمية"}
                onChange={handleRequirementChange}
                className="mr-2"
              />
              <label>كمية</label>
              {formData.requirement === "كمية" && (
                <div className="flex flex-col gap-2 mt-2">
                  <input
                    type="number"
                    name="minQuantity"
                    placeholder="اقل كمية"
                    value={formData.minQuantity}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
                  />
                  <input
                    type="number"
                    name="maxQuantity"
                    placeholder="اكبر كمية"
                    value={formData.maxQuantity}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="requirement"
                value="خيارات مخصصة"
                checked={formData.requirement === "خيارات مخصصة"}
                onChange={handleRequirementChange}
                className="mr-2"
              />
              <label>خيارات مخصصة</label>
              {formData.requirement === "خيارات مخصصة" && (
                <textarea
                  name="customOptions"
                  placeholder="البيانات"
                  value={formData.customOptions}
                  onChange={handleChange}
                  className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary text-primary"
                />
              )}
            </div>
          </div>
          <button className="bg-white border-primary border py-2 px-6 w-[50%] mx-auto rounded my-6">
            اضف متطلب اخر
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-indigo-900 duration-200 focus:outline-none focus:border-primary"
        >
          اضافة
        </button>
      </form>
    </div>
  );
};

export default DashboardAddProduct;
