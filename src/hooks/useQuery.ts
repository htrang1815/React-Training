import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

const useQuery = () => {
  const { search, pathname } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  console.log("queryParams", queryParams);
  //   console.log("search", search);
  const navigate = useNavigate();

  const setQuery = (queryObj: string) => {
    const newquery = new URLSearchParams(queryObj);
    navigate("?" + newquery.toString(), { replace: true });
    console.log("pathname", newquery);
  };

  const getQuery = (query: string[]) => {
    const params = new URLSearchParams(location.search);
    let result: { [key: string]: string | null } = {};

    for (const item of query) {
      const param = params.get(item);
      result = { ...result, [item]: param };
    }
    return result;
  };

  const removeQueryParams = () => {
    console.log(pathname);
    navigate(pathname, { replace: true });
  };

  return { setQuery, removeQueryParams, getQuery };
};
export default useQuery;
