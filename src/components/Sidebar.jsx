import React from "react";
import UserProfile from "../components/UserProfile";
import home from "../assets/svg/home.svg";
import status from "../assets/svg/status.svg";
import message from "../assets/svg/message.svg";
import calender from "../assets/svg/calender.svg";
import news from "../assets/svg/news.svg";
import report from "../assets/svg/report.svg";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {

  const getSideBarItem = (title, imgUrl, to) => {
    return <NavLink to={to} className="flex items-baseline gap-3 cursor-pointer border-cyan-500 opacity-90 hover:border-l-4 hover:opacity-100 hover:bg-gradient-to-l from-cyan-500 to-blue-400 ">
      <img src={imgUrl} />
      {title}
    </NavLink>;
  };

  return (
    <div className="dashbord h-full w-1/6 h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl">
      <UserProfile />
      <div>
        <div className="total-list text-xl font-semibold text-slate-100 flex flex-col mt-10 [&>*]:py-5 [&>*]:pl-10 ">
          {getSideBarItem('DashBoard', home, '/dashbord')}
          {getSideBarItem('Status', status, '/')}
          {getSideBarItem('Message', message, '/message')}
          {getSideBarItem('Calender', calender, '/calender')}
          {getSideBarItem('News', news, '/status')}
          {getSideBarItem('Reports', report, '/status')}
        </div>
      </div>
    </div>
  );
};
