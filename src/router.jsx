import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./containers/Dashboard";
import { Calendar } from "./pages/Calender";
import DashbordCards from "./pages/DashbordCards";
import { Message } from "./pages/Message";
import { Status } from "./pages/Status";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/dashbord" element={<DashbordCards />} />
        <Route path="/" element={<Status />} />
        <Route path="/message" element={<Message />} />
        <Route path="/calender" element={<Calendar />} />
       
      </Route>
    </Routes>
  );
}

export default Routing;
