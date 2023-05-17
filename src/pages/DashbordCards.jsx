import status from "../assets/svg/status.svg";
import message from "../assets/svg/message.svg";
import calender from "../assets/svg/calender.svg";
import news from "../assets/svg/news.svg";
import report from "../assets/svg/report.svg";

const cardItems = [
  {
    svg: status,
    name: "Status",
    color: "bg-purple-400",
  },
  {
    svg: message,
    name: "Message",
    color: "bg-rose-400",
  },
  {
    svg: calender,
    name: "Calender",
    color: "bg-green-400",
  },
  {
    svg: news,
    name: "News",
    color: "bg-pink-400",
  },
  {
    svg: report,
    name: "Report",
    color: "bg-blue-400",
  },
];

function DashbordCards() {
  return (
    <>
      <div className=" grid grid-cols-3 grid-rows-2 w-full h-1/2  p-16 mt-12 text-white text-4xl font-bold  ">
        {cardItems.map((item) => {
          return (
            <div
              className={`${item.color} flex gap-10 pl-20 pt-4 border-none rounded-lg ml-5 mb-5 hover:scale-110`}
            >
              <img className="w-20" src={item.svg} />
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default DashbordCards;
