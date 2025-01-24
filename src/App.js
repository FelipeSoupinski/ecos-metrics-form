import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EndForm from "./components/EndForm";
import Form from "./components/Form";
import Home from "./components/Home";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user-info" element={<UserInfo />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/in-the-end" element={<EndForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
