import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const Dashboard = () => {
  return (
    <div className="maincontents h-full bg-slate-400 shadow-xl border rounded-xl flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full p-4">
        <Header />
        <div className="p-4 w-full h-full bg-slate-300 rounded-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
