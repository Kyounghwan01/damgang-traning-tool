import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./page/FirstPage";
import Main from "./page/Main";
import SecondPage from "./page/SecondPage";
import Login from "./page/Login";
import Setting from "./page/Setting";
import Insert from "./page/Insert";
import Statistics from "./page/Statistics";

export const FIRST_PAGE_PATH = "first";
export const SECOND_PAGE_PATH = "second";
export const MAIN_PAGE_PATH = "/";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FirstPage />} path={FIRST_PAGE_PATH} />
        <Route element={<SecondPage />} path={SECOND_PAGE_PATH} />
        <Route element={<Main />} path="/" />
        <Route element={<Login />} path="login" />
        <Route element={<Setting />} path="setting" />
        <Route element={<Insert />} path="insert" />
        <Route element={<Statistics />} path="statistics" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
