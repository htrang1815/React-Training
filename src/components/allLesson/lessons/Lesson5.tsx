import { Pagination, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Lesson5CheckBox from "./Lesson5CheckBox";
import { useAppSelector } from "../../../hook";

const Lesson5 = () => {
  const filter = useAppSelector((state) => state.filter.value);
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
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });
  const getData = async () => {

    let skip = pagination.page * pagination.pageSize - pagination.pageSize;
    setSkip(skip);
    await axios
      .get(
        `https://dummyjson.com/products?skip=${skip}&limit=${pagination.pageSize}`
      )
      .then((res) => {
        const data = res.data.products;
        const total = res.data.total;
        setData(data);
        setTotal(total);
      })
      .catch((error) => console.log(error));
  };

  const handleFilterColumns = () => {
    let data: any[] = [];
    for (let i = 0; i < filter.length; i++) {
      columns.forEach((column) => {
        if (column.key.toLowerCase() === filter[i].toLowerCase()) {
          data.push(column);
        }
      });
    }
    setFilterColumn(data);
  };

  const handlePaginationChange = (page: any, pageSize: any) => {
    setPagination({ page, pageSize });
  };

  const showTotal = (total: any, range: any[]) => {
    return `${range[0]}-${range[1]} of ${total} items`;
  };

  useEffect(() => {
    getData();
    handleFilterColumns();
  }, [pagination, skip, filter]);

  // //console.log("filterColumn", filterColumn);

  return (
    <div className="p-8 max-w-full relative">
      <Lesson5CheckBox></Lesson5CheckBox>
      <Table
        dataSource={data}
        pagination={{
          total,
          position: ["topRight"],
          showSizeChanger: true,
          showTotal,
          onChange: handlePaginationChange,
        }}
        columns={filterColumn}
      ></Table>
    </div>
  );
};

export default Lesson5;
