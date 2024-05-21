import React from "react";

const DashboardMain = () => {
  return (
    <div dir="rtl">
      <div>
        <h1 className="text-5xl mb-6 text-white">الطلبات</h1>
        <div className="flex flex-wrap gap-4">
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-orange-600">2</h1>
            <h1 className="text-xl">قيد الانتظار</h1>
          </div>
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-orange-600">4</h1>
            <h1 className="text-xl">طلبات اعتراض</h1>
          </div>
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold  text-orange-600">150</h1>
            <h1 className="text-xl">عدد المستخدمين</h1>
          </div>
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-orange-600">4</h1>
            <h1 className="text-xl">طلبات الشحن</h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 my-6">
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-green-500">0</h1>
            <h1 className="text-xl">قيد العمل</h1>
          </div>
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-green-500">50</h1>
            <h1 className="text-xl">تم التنفيذ اليوم</h1>
          </div>
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-green-500">59</h1>
            <h1 className="text-xl">الكل</h1>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-5xl mb-6 text-white ">الارصدة</h1>
        <div className="flex flex-wrap gap-4 text-center">
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-green-600">1452</h1>
            <h1 className="text-xl">رصيد الزبائن دولار</h1>
          </div>
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-red-600">4</h1>
            <h1 className="text-xl">رصيد دائن دولار</h1>
          </div>
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold  text-orange-600">-2627</h1>
            <h1 className="text-xl">سحب اضافي دولار</h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6 text-center">
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-green-600">1452</h1>
            <h1 className="text-xl">رصيد الزبائن ليرة تركية</h1>
          </div>
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-red-600">4</h1>
            <h1 className="text-xl">رصيد دائن ليرة تركية</h1>
          </div>
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold  text-orange-600">-2627</h1>
            <h1 className="text-xl">سحب اضافي ليرة تركية</h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6 text-center">
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-green-600">1452</h1>
            <h1 className="text-xl">رصيد الزبائن يورو</h1>
          </div>
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-red-600">4</h1>
            <h1 className="text-xl">رصيد دائن يورو</h1>
          </div>
          <div className="p-6 bg-blue-950 w-[150px] h-[125px] rounded text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold  text-orange-600">-2627</h1>
            <h1 className="text-xl">سحب اضافي يورو</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
