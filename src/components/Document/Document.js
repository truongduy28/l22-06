import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { DOCUMENTS_DATA } from "../../DATA_TEST";

const Document = ({ view, data }) => {
  const navigate = useNavigate();
  const [dataFullView, setDataFullView] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const data = DOCUMENTS_DATA.filter((d) => d.id == id);
    setDataFullView(data[0]);
    console.log(dataFullView);
  }, [id]);

  const itemView = () => {
    return (
      data && (
        <div className="document w-[23%] bg-white border-[1px] shadow-md shadow-blue-100">
          <div
            className="document__image h-[400px] "
            onClick={() => {
              navigate(`/${data.id}`);
            }}
          >
            <img className="w-full h-full object-cover   " src={data.image} />
          </div>
          <div className="document__desc text-center">
            <Link to={`/${data.id}`}>
              <p>{data.name}</p>
            </Link>
            <p>Thể loại: {data.type ? data.type : "Chưa xác định"}</p>
          </div>
        </div>
      )
    );
  };
  const fullView = () => {
    return dataFullView ? (
      <div className="bg-white p-2 shadow-md">
        <div className="flex items-center gap-1">
          <p
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoIosArrowRoundBack size={"25px"} />
          </p>
          Trở về trang trước
        </div>
        <div className="flex gap-2">
          <div className="document_image max-w-[50%]">
            <img src={dataFullView.image} alt="" />
          </div>
          <div className="document_desc">
            <h1>{dataFullView.name} </h1>
            <p>Số lượng còn lại: {dataFullView.num}.</p>
            <p>
              Loại sách:{" "}
              {dataFullView.type ? dataFullView.type : "Chưa cập nhật...."}.
            </p>
            <p>
              Tác giả:{" "}
              {dataFullView.author ? dataFullView.author : "Chưa cập nhật...."}
            </p>
            <p>
              Thông tin xuất bản:
              {dataFullView.publisher
                ? dataFullView.publisher
                : "Chưa cập nhật...."}
            </p>
            <p>
              Năm xuất bản:
              {dataFullView.publishDate
                ? dataFullView.publishDate
                : "Chưa cập nhật...."}
            </p>
            <p>
              Mô tả vật lý: khổ{" "}
              {dataFullView.cm ? dataFullView.cm : "Chưa cập nhật...."}cm,
              {dataFullView.pageNumber
                ? dataFullView.pageNumber
                : "Chưa cập nhật...."}{" "}
              trang.
            </p>
            <p>
              Kệ sách:{" "}
              {dataFullView.location
                ? dataFullView.location
                : "Chưa cập nhật...."}
            </p>
            <p>
              Chủ đề:{" "}
              {dataFullView.topic ? dataFullView.topic : "Chưa cập nhật...."}
            </p>
            <p>
              Học phần:{" "}
              {dataFullView.course ? dataFullView.course : "Chưa cập nhật...."}
            </p>
            <p>
              Khoa:{" "}
              {dataFullView.department
                ? dataFullView.department
                : "Chưa cập nhật...."}
            </p>
            <p>
              Số tập:
              {dataFullView.episodeNumber
                ? dataFullView.episodeNumber
                : "Chưa cập nhật...."}
            </p>
            <p>
              Tên tập:
              {dataFullView.episodeTitle
                ? dataFullView.episodeTitle
                : "Chưa cập nhật...."}
            </p>
            <p>
              Ngôn ngữ:{" "}
              {dataFullView.language
                ? dataFullView.language
                : "Chưa cập nhật...."}
            </p>
            <p>
              Minh họa:
              {dataFullView.illustration
                ? dataFullView.illustration
                : "Chưa cập nhật...."}
            </p>
            <p>
              Giá bìa:{" "}
              {dataFullView.price ? dataFullView.price : "Chưa cập nhật...."}
              vnđ
            </p>
            <p>
              Từ khóa (tags):{" "}
              {dataFullView.tags ? dataFullView.tags : "Chưa cập nhật...."}
            </p>
            <p>
              ISBN:{" "}
              {dataFullView.isbn ? dataFullView.isbn : "Chưa cập nhật...."}
            </p>
          </div>
        </div>
      </div>
    ) : (
      <p>Không tìm thấy</p>
    );
  };
  return view === "itemView" ? itemView() : fullView();
};

export default Document;
