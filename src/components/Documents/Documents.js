import React, { useState } from "react";
import { DOCUMENTS_DATA } from "../../DATA_TEST";
import Document from "./../Document/Document";

const Documents = () => {
  const [searchType, setSearchType] = useState("basic");

  const [dataSearch, setDataSearch] = useState(DOCUMENTS_DATA);
  const [query, setQuery] = useState({
    searchTypeInBasic: "Tên sách",
    valueTypeInBasic: "",
    name: "",
    topic: "",
    type: "",
    author: "",
    publisher: "",
    publishDate: "",
    course: "",
    tags: "",
    isbn: "",
  });

  const handleSearchAdvanced = (e) => {
    e.preventDefault();
    const data =
      "m kéo api Tìm nhiều ?tên=&năm=&tacgia=...... rồi set về thằng ở dưới";
    setDataSearch(data);
  };

  const handleSearchBasic = (e) => {
    e.preventDefault();
    const data = `kéo luôn cái api search nhiều => api?${query.searchTypeInBasic}=${query.valueTypeInBasic}&`;
    setDataSearch(data);
  };

  const searchBasicType = () => {
    return (
      <div className="border-blue-300 border-2 border-t-0 p-2">
        <form
          className="flex justify-center gap-2 "
          onSubmit={(e) => {
            handleSearchBasic(e);
          }}
        >
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setQuery({ ...query, searchTypeInBasic: e.target.value });
            }}
          >
            <option value="tensach">Tên sách</option>
            <option value="chude">Chủ đề</option>
            <option value="tacgia">Tác giả</option>
            <option value="khoa">Khoa</option>
            <option value="tags">Từ khóa (tags) </option>
          </select>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[70%] focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nhập nội dung..."
            value={query.valueTypeInBasic}
            onChange={(e) => {
              setQuery({ ...query, valueTypeInBasic: e.target.value });
            }}
          ></input>

          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Tìm kiếm
          </button>
        </form>
      </div>
    );
  };
  const searchAdvancerType = () => {
    const styleInput =
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    return (
      <div className="border-blue-300 border-2 border-t-0 p-2">
        <form onSubmit={(e) => handleSearchAdvanced(e)}>
          <div className="flex gap-2    ">
            <div style={{ flex: 1 }}>
              <div className="flex mb-2 items-center">
                <label className="min-w-[123px]"> Tên tài liệu: </label>
                <input
                  className={styleInput}
                  style={{ flex: 1 }}
                  type="text"
                  placeholder="Nhập tên tài liệu..."
                  value={query.name}
                  onChange={(e) => setQuery({ ...query, name: e.target.value })}
                />
              </div>
              <div className="flex mb-2 items-center">
                <label className="min-w-[123px]"> Tên tác giả:</label>
                <input
                  className={styleInput}
                  style={{ flex: 1 }}
                  type="text"
                  placeholder="Nhập tên tác giả..."
                  value={query.author}
                  onChange={(e) =>
                    setQuery({ ...query, author: e.target.value })
                  }
                />
              </div>
              <div className="flex mb-2 items-center">
                <label className="min-w-[123px]"> Nhà xuất bản:</label>
                <input
                  className={styleInput}
                  style={{ flex: 1 }}
                  type="text"
                  placeholder="Nhập nhà xuất bản..."
                  value={query.publisher}
                  onChange={(e) =>
                    setQuery({ ...query, publisher: e.target.value })
                  }
                />
              </div>
              <div className="flex mb-2 items-center">
                <label className="min-w-[123px]"> Năm xuất bản:</label>
                <input
                  className={styleInput}
                  style={{ flex: 1 }}
                  type="text"
                  placeholder="Nhập năm xuất bản..."
                  value={query.publishDate}
                  onChange={(e) =>
                    setQuery({ ...query, publishDate: e.target.value })
                  }
                />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="flex mb-2 items-center">
                <label className="min-w-[123px]"> Chủ đề: </label>
                <input
                  className={styleInput}
                  style={{ flex: 1 }}
                  type="text"
                  placeholder="Nhập chủ đề..."
                  value={query.topic}
                  onChange={(e) =>
                    setQuery({ ...query, topic: e.target.value })
                  }
                />
              </div>
              <div className="flex mb-2 items-center">
                <label className="min-w-[123px]"> Loại sách: </label>
                <input
                  className={styleInput}
                  style={{ flex: 1 }}
                  type="text"
                  placeholder="Nhập loại sách..."
                  value={query.type}
                  onChange={(e) => setQuery({ ...query, type: e.target.value })}
                />
              </div>
              <div className="flex mb-2 items-center">
                <label className="min-w-[123px]"> Từ khóa (tags): </label>
                <input
                  className={styleInput}
                  style={{ flex: 1 }}
                  type="text"
                  placeholder="Nhập từ khóa..."
                  value={query.tags}
                  onChange={(e) => setQuery({ ...query, tags: e.target.value })}
                />
              </div>
              <div className="flex mb-2 items-center">
                <label className="min-w-[123px]"> ISBN: </label>
                <input
                  className={styleInput}
                  style={{ flex: 1 }}
                  type="text"
                  placeholder="Nhập mã ISBN..."
                  value={query.isbn}
                  onChange={(e) => setQuery({ ...query, isbn: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="p-2  shadow-lg bg-white">
      <div className="search">
        <div className="flex border-b-2 border-blue-300">
          <div
            className={`text-center py-1 ${
              searchType === "basic"
                ? " bg-blue-300 text-white"
                : " bg-white text-black"
            }`}
            style={{ flex: 1 }}
            onClick={() => {
              setSearchType("basic");
            }}
          >
            TÌM CƠ BẢN
          </div>
          <div
            className={`text-center py-1 ${
              searchType === "advancer"
                ? " bg-blue-300 text-white"
                : " bg-white text-black"
            }`}
            style={{ flex: 1 }}
            onClick={() => {
              setSearchType("advancer");
            }}
          >
            TÌM NÂNG CAO
          </div>
        </div>
        <div className="">
          {searchType === "basic" ? searchBasicType() : searchAdvancerType()}
        </div>
      </div>
      <div className="results p-2">
        <div className="data flex justify-center  gap-4 flex-wrap">
          {dataSearch.map((d) => (
            <Document view={"itemView"} data={d} key={d.id} id={d.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
