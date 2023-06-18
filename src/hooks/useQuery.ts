import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

const useQuery = () => {
  const { search, pathname } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  console.log("queryParams", queryParams);
  //   console.log("search", search);
  const navigate = useNavigate();

  const setQuery = (queryObj: any) => {
    const newquery = new URLSearchParams(queryObj);
    navigate("?" + newquery.toString(), { replace: true });
    // console.log("pathname", newquery);
  };
  const removeQueryParams = () => {
    console.log(pathname);
    navigate(pathname, { replace: true });
  };

  return { setQuery, removeQueryParams };
};
export default useQuery;
