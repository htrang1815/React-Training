import usePagination from "../../../hooks/usePagination";

const Lesson8 = () => {
  const { PaginationUI } = usePagination();
  return (
    <div className="p-8 max-w-full relative">
      <PaginationUI/>
    </div>
  );
};

export default Lesson8;
