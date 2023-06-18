import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import WelcomePage from "./components/welcome/WelcomePage";
import { useAppDispatch, useAppSelector } from "./hook";
import AllLessonPage from "./components/allLesson/AllLessonPage";
import { setAuth } from "./features/auth/authSlice";
import Lesson1 from "./components/allLesson/lessons/Lesson1";
import Lesson2 from "./components/allLesson/lessons/Lesson2";
import Lesson3 from "./components/allLesson/lessons/Lesson3";
import AllLesson from "./components/allLesson/lessons/AllLesson";
import Lesson4 from "./components/allLesson/lessons/Lesson4";
import Lesson5 from "./components/allLesson/lessons/Lesson5";
import Lesson6 from "./components/allLesson/lessons/lesson6/Lesson6";

const Router = () => {
  const auth = useAppSelector((state) => state.auth.value);
  const dispatch = useAppDispatch();
  const data = localStorage.getItem("isAuth");
  if (data) {
    dispatch(setAuth(true));
  } else {
    dispatch(setAuth(false));
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/sign-in" />}></Route>
      <Route path="/auth/sign-in" element={<LoginPage />}></Route>
      {auth && (
        <>
          <Route path="/welcome" element={<WelcomePage />}></Route>
          <Route path="/lesson/*" element={<AllLessonPage />}>
            <Route path="" element={<AllLesson />}></Route>
            <Route path="1" element={<Lesson1 />}></Route>
            <Route path="2" element={<Lesson2 />}></Route>
            <Route path="3" element={<Lesson3 />}></Route>
            <Route path="4" element={<Lesson4 />}></Route>
            <Route path="5" element={<Lesson5 />}></Route>
            <Route path="6" element={<Lesson6 />}></Route>
          </Route>
        </>
      )}
    </Routes>
  );
};

export default Router;
