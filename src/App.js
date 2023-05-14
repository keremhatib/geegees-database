import { Routes, Route } from "react-router-dom";

import Home from "./components/homePage.js";
import RecruitForm from "./components/recruitForm/recruitForm.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="form" element={<RecruitForm />} />
    </Routes>
  );
};

export default App;
