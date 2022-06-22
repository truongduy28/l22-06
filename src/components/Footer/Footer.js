import React from "react";
import logo from "../../access/Logo_ctuet.png";
const Footer = () => {
  return (
    <div className="flex justify-between bg-slate-50 px-4 py-[65px] mt-10 border-t-[1px] border-black-100">
      <div className="flex items-center">
        <div>
          <img className="w-[100px]" src={logo} alt="" />
        </div>
        <div>
          {" "}
          <p className="font-medium ">
            Trường Đại học Kỹ thuật - Công nghệ Cần Thơ
          </p>
          <p>Địa chỉ: 256 Nguyễn Văn Cừ, Quận Ninh Kiều, Thành phố Cần Thơ</p>
          <p>Email: phonghanhchinh@ctuet.edu.vn</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">Thời gian phục vụ:</p>
        <p>- Thứ 2 - Thứ 6</p>
        <p>- Sáng: 7h30 -10h30 , Chiều: 13h30 - 16h30</p>
        <p>- Nghỉ Thứ 7, chủ nhật và ngày lễ theo quy định</p>
      </div>
    </div>
  );
};

export default Footer;
