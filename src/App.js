import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllMetricsTable from "./components/AllMetricsTable";
import EndForm from "./components/EndForm";
import Form from "./components/Form";
import Home from "./components/Home";
import MetricGroupsTable from "./components/MetricGroupsTable";
import ResearchInformation from "./components/ResearchInformation";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user-info" element={<UserInfo />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/in-the-end" element={<EndForm />}></Route>
        <Route path="/research-info" element={<ResearchInformation />}></Route>
        <Route path="/all-metrics" element={<AllMetricsTable />}></Route>
        <Route path="/metric-groups" element={<MetricGroupsTable />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
