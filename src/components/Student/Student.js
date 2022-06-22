import React from "react";

const Student = () => {
  return (
    <div className="bg-white min-h-[40vh] shadow-lg p-2">
      <div className="search">
        <p className="text-center text-xl font-normal">
          TRA CỨU THÔNG TIN SINH VIÊN MƯỢN SÁCH
        </p>
        <form className="flex w-[60%] m-auto gap-2">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style={{ flex: 1 }}
            placeholder="Nhập MSSV..."
          />
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Tra cứu
          </button>
        </form>
      </div>
      <div className="result">
        <p>Bó tay hết biết kq trả gì rồi</p>
      </div>
    </div>
  );
};

export default Student;
