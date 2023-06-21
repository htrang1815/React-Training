import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../nav/NavBar";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/auth/authSlice";

const AllLessonPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    dispatch(setAuth(false));
    // localStorage.setItem("isAuth", "true");
    navigate("/auth/sign-in");
  };
  return (
    <div className="h-screen">
      <div className="border border-solid border-[#ccc] flex justify-between items-center px-4 top-0 z-50 bg-white py-2">
        <div>
          <a
            className="flex items-center text-[16px] font-[400] p-2 text-[#111827] rounded-lg  hover:bg-gray-100 active"
            href="/lesson/"
          >
            <span className="ml-3">All lesson</span>
          </a>
        </div>
        <b className="font-[700] text-[16px] text-[#000000]">
          Bài thực hành react ( ts required )
        </b>
        <button
          className="bg-blue-400 text-white text-sm px-3 rounded py-2 h-fit"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="min-h-[93vh] flex w-full">
        <div className="sidebar transition-transform -translate-x-full sm:translate-x-0 min-h-[100%] w-[12%]">
          <NavBar></NavBar>
        </div>
        <div className="w-full min-h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AllLessonPage;
