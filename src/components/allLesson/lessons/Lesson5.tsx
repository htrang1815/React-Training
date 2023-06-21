import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Lesson5CheckBox from "./Lesson5CheckBox";
import { useAppSelector } from "../../../hook";
import usePagination from "../../../hooks/usePagination";

const Lesson5 = () => {
  const filter = useAppSelector((state) => state.filter.value);
  interface IColumn {
    title: string;
    dataIndex: string;
    key: string;
  }
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 400,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "DiscountPercentage",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: () => <span>images</span>,
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail: string | undefined) => (
        <img src={thumbnail} className=" w-[75px] h-[75px] object-cover" />
      ),
    },
  ];
  // const checkList = localStorage.getItem("checklist");
  const [data, setData] = useState([]);
  const [filterColumn, setFilterColumn] = useState([...columns]);
  // const [skip, setSkip] = useState(0);

  const { pagination, PaginationUI, setPagination } = usePagination();
  const getData = async () => {
    const skip =
      (Number(pagination.currentPage) - 1) * Number(pagination.pageSize);
    // setSkip(skip);
    await axios
      .get(
        `https://dummyjson.com/products?skip=${skip}&limit=${pagination.pageSize}`
      )
      .then((res) => {
        const { products: data, total } = res.data;
        console.log(data, total);
        setData(data);
        setPagination({ ...pagination, totalRecord: total });
      })
      .catch((error) => console.log(error));
  };

  const handleFilterColumns = () => {
    const data: IColumn[] = [];
    for (const element of filter) {
      columns.forEach((column) => {
        if (column.key.toLowerCase() === element.toLowerCase()) {
          data.push(column);
        }
      });
    }
    setFilterColumn(data);
  };

  useEffect(() => {
    getData();
    handleFilterColumns();
    console.log("effect");
  }, [pagination.currentPage, pagination.pageSize]);

  return (
    <div className="p-8 max-w-full ">
      <div className="flex flex-row justify-end items-center mb-5 gap-5">
        <Lesson5CheckBox></Lesson5CheckBox>
        <PaginationUI className={" mr-0 "} />
      </div>
      <Table
        dataSource={data}
        // pagination={{
        //   total,
        //   position: ["topRight"],
        //   showSizeChanger: true,
        //   showTotal,
        //   onChange: handlePaginationChange,
        // }}
        pagination={false}
        columns={filterColumn}
      ></Table>
    </div>
  );
};

export default Lesson5;
