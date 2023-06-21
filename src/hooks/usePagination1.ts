import { useState } from "react";
import useQuery from "./useQuery";
import axios from "axios";

const usePagination = () => {
  const { setQuery, getQuery } = useQuery();
  const pagiQuery = getQuery(["page", "size"]);
  const [pagination, setPagination] = useState({
    currentPage: pagiQuery?.page || 1,
    totalRecord: 0,
    pageSize: pagiQuery?.size || 10,
  });

  interface IPagination {
    currentPage: string | number;
    totalRecord: number | undefined;
    pageSize: string | number;
  }

  const getCurrentPageData = (pagination: IPagination) => {
    const startIndex =
      (Number(pagination.currentPage) - 1) * Number(pagination.pageSize);
    const endIndex = Number(startIndex) + Number(pagination.pageSize);
    return initialData.slice(startIndex, endIndex);
  };

  const getDataWithAPI = async (url: string) => {
    const skip =
      (Number(pagination.currentPage) - 1) * Number(pagination.pageSize);
    await axios
      .get(`${url}?skip=${skip}&limit=${pagination.pageSize}`)
      .then((res) => {
        const data = res.data.products;
        const total = res.data.total;
        setPagination({...pagination, totalRecord :  total})
        return { data, total };
      })
      .catch((error) => console.log(error));
  };

  const showTotal = (total: number, range: [number, number]) => {
    return `${range[0]}-${range[1]} of ${total} items`;
  };

  const paginationChange = (page: number, pageSize: number) => {
    setPagination({ ...pagination, currentPage: page, pageSize: pageSize });
    const query = "?page" + "=" + page + "&size=" + pageSize;
    setQuery(query);
  };

  return {
    paginationChange,
    getDataWithAPI,
    showTotal,
    pagination,
    getCurrentPageData,
  };
};

export default usePagination;
