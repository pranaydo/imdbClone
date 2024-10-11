import { DeleteOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React from "react";

const WatchList = ({ watchList, handelRemoveFromWatchList }) => {
  // console.log("watchListfromwatchlist co,p", watchList);

  // const columns = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'title',
  //     key: 'name',
  //   },
  //   {
  //     title: 'Release Date',
  //     dataIndex: 'release_date',
  //     key: 'age',
  //   },
  //   {
  //     title: 'Original Language',
  //     dataIndex: 'original_language',
  //     key: 'address',

  //   },
  //   {
  //     title: 'Overview',
  //     dataIndex: 'overview',
  //     key: 'overview',
  //     width: 300
  //   },
  //   {
  //     title: '',
  //     dataIndex: 'address',
  //     key: 'address',
  //     render : (record)=>(
  //       <div>
  //         <DeleteOutlined  />
  //       </div>
  //     )
  //   },
  // ];
  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "name",
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (title, record) => (
        <div className=" ">
          <div>{title}</div>
          <div>
            <img
              className="w-[10rem] h-[4rem] "
              src={`https://image.tmdb.org/t/p/original/${record.poster_path}`}
              alt="poster img"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Release Date",
      dataIndex: "release_date",
      key: "release_date",
      sorter: (a, b) => new Date(a.release_date) - new Date(b.release_date),
    },
    {
      title: "Original Language",
      dataIndex: "original_language",
      key: "original_language",
      sorter: (a, b) => a.original_language.localeCompare(b.original_language),
    },
    {
      title: "Overview",
      dataIndex: "overview",
      key: "overview",
      width: 300,
      sorter: (a, b) => a.overview.length - b.overview.length,
    },
    {
      title: "",
      key: "action",
      render: (record) => (
        <div>
          <DeleteOutlined onClick={() => handelRemoveFromWatchList(record)} />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div>
        {/* <div className='flex justify-center flex-wrap m-4'>
            <div className='flex justify-center bg-blue-300 h-[3rem] w-[9rem] rounded-xl text-white text-bold items-center mx-4'> Action </div>
            <div className='flex justify-center bg-blue-300 h-[3rem] w-[9rem] rounded-xl text-white text-bold items-center mx-4'> Action </div>
            <div className='flex justify-center bg-blue-300 h-[3rem] w-[9rem] rounded-xl text-white text-bold items-center mx-4'> Action </div>
        </div> */}
        {/* <div className='flex justify-center my-4'> 
          <input className=' h-[3rem] w-[18rem] bg-gray-100 outline-none m-4 p-4'
           type='text' placeholder='Search for movies' alt='movie pic' />
        </div> */}

        <div>
          <Table dataSource={watchList} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default WatchList;
