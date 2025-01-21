import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Form from "./components/Form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/home" element={<Home />}></Route> */}
        <Route path="/form" element={<Form />}></Route>
        {/* <Route path="/form" element={<Registrar />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
