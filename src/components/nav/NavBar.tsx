import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 border-r-[1px] border-solid border-[#ccc]">
      {" "}
      <NavLink
        to="/lesson/1"
        className={({ isActive }) => {
          return `${
            isActive ? "bg-[#4ade80]" : ""
          } font-[500] text-[16px] hover:bg-gray-100 p-2 pl-4 text-gray-900 flex items-center rounded-lg leading-6 mb-2`;
        }}
      >
        Lesson 1
      </NavLink>
      <NavLink
        to="/lesson/2"
        className={({ isActive }) => {
          return `${
            isActive ? "bg-[#4ade80]" : ""
          } font-[500] text-[16px] hover:bg-gray-100 p-2 pl-4 text-gray-900 flex items-center rounded-lg leading-6 mb-2`;
        }}
      >
        Lesson 2
      </NavLink>{" "}
      <NavLink
        to="/lesson/3"
        className={({ isActive }) => {
          return `${
            isActive ? "bg-[#4ade80]" : ""
          } font-[500] text-[16px] hover:bg-gray-100 p-2 pl-4 text-gray-900 flex items-center rounded-lg leading-6 mb-2`;
        }}
      >
        Lesson 3
      </NavLink>{" "}
      <NavLink
        to="/lesson/4"
        className={({ isActive }) => {
          return `${
            isActive ? "bg-[#4ade80]" : ""
          } font-[500] text-[16px] hover:bg-gray-100 p-2 pl-4 text-gray-900 flex items-center rounded-lg leading-6 mb-2`;
        }}
      >
        Lesson 4
      </NavLink>{" "}
      <NavLink
        to="/lesson/5"
        className={({ isActive }) => {
          return `${
            isActive ? "bg-[#4ade80]" : ""
          } font-[500] text-[16px] hover:bg-gray-100 p-2 pl-4 text-gray-900 flex items-center rounded-lg leading-6 mb-2`;
        }}
      >
        Lesson 5
      </NavLink>{" "}
      <NavLink
        to="/lesson/6"
        className={({ isActive }) => {
          return `${
            isActive ? "bg-[#4ade80]" : ""
          } font-[500] text-[16px] hover:bg-gray-100 p-2 pl-4 text-gray-900 flex items-center rounded-lg leading-6 mb-2`;
        }}
      >
        Lesson 6
      </NavLink>{" "}
      <NavLink
        to="/lesson/7"
        className={({ isActive }) => {
          return `${
            isActive ? "bg-[#4ade80]" : ""
          } font-[500] text-[16px] hover:bg-gray-100 p-2 pl-4 text-gray-900 flex items-center rounded-lg leading-6 mb-2`;
        }}
      >
        Lesson 7
      </NavLink>{" "}
      <NavLink
        to="/lesson/8"
        className={({ isActive }) => {
          return `${
            isActive ? "bg-[#4ade80]" : ""
          } font-[500] text-[16px] hover:bg-gray-100 p-2 pl-4 text-gray-900 flex items-center rounded-lg leading-6 mb-2`;
        }}
      >
        Lesson 8
      </NavLink>
    </div>
  );
};

export default NavBar;
