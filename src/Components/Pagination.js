import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center   ">
      <ArrowLeftOutlined
        className="px-8"
        onClick={() => {
          if (pageNumber === 1) {
            setPageNumber(1);
          } else {
            setPageNumber(pageNumber - 1);
          }
        }}
      />
      <div className="px-8 font-bold" onClick={() => setPageNumber(1)}>
        {" "}
        1{" "}
      </div>
      <ArrowRightOutlined
        className="px-8"
        onClick={() => setPageNumber(pageNumber + 1)}
      />
    </div>
  );
};

export default Pagination;
