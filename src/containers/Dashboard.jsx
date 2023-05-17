import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const Dashboard = () => {
  return (
    <div className="maincontents h-full bg-stone-300 shadow-xl border rounded-xl flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
