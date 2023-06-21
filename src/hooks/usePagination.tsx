import { useState } from "react";
import useQuery from "./useQuery";
import { Pagination } from "antd";

const usePagination = () => {
  const { setQuery, getQuery } = useQuery();
  const pagiQuery = getQuery(["page", "size"]);
  const [pagination, setPagination] = useState({
    currentPage: pagiQuery?.page || 1,
    totalRecord: 0,
    pageSize: pagiQuery?.size || 10,
  });

  const showTotal = (total: number, range: [number, number]) => {
    return `${range[0]}-${range[1]} of ${total} items`;
  };


  const paginationChange = (page: number, pageSize: number) => {
    setPagination({ ...pagination, currentPage: page, pageSize: pageSize });
    const query = "?page" + "=" + page + "&size=" + pageSize;
    setQuery(query);
  };

  const PaginationUI = ({className} : {className : string}) => {
    return (
      <Pagination
        total={pagination?.totalRecord || 1000}
        showSizeChanger={true}
        showTotal={showTotal}
        onChange={paginationChange}
        pageSize={Number(pagination?.pageSize)}
        current={Number(pagination?.currentPage)}
        className={className}
      />
    );
  };

  return { showTotal, paginationChange, PaginationUI, pagination ,setPagination};
};
export default usePagination;
