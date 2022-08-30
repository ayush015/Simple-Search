import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResultPage from "./Result/ResultPage";
import SearchPage from "./Result/searchPage";
import Loader from "./Components/Loader";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
        <Route path="/loader" element={<Loader />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
