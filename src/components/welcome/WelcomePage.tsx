// import { useAppSelector } from "../../hook";

const WelcomePage = () => {
  // const auth = useAppSelector((state) => state.auth.value);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <h1 className="text-[56px] font-bold m-4">Welcome</h1>
      <a href="lesson" className="hover:text-blue-500">
        👉 Go to lesson list
      </a>
    </div>
  );
};

export default WelcomePage;
