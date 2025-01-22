import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Form from "./components/Form";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user-info" element={<UserInfo />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
