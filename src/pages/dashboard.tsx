import { useMemo } from "react";
import DashboardCard from "@components/DashboardCard";
import {
  IDashboardCardProps,
  IDashboardCardStyle,
} from "@interfaces/dashboard";
import { useGetStaticsQuery, useGetChartQuery } from "@redux/apis/dashboard";

const cards: IDashboardCardStyle[] = [
  {
    imgUrl: "/icons/completed.svg",
    progressBarClass: "bg-main-color",
    for: "course_completed",
  },
  {
    imgUrl: "/icons/earned.svg",
    progressBarClass: "bg-earned-color",
    for: "certificate_earned",
  },
  {
    imgUrl: "/icons/progress.svg",
    progressBarClass: "bg-progress",
    for: "course_in_progress",
  },
  { imgUrl: "/icons/course.svg", for: "total_course" },
];

const Dashboard = () => {
  const { data } = useGetStaticsQuery();
  // const {}=useGetChartQuery()
  const res = useMemo(() => {
    return data?.statics?.map((stat) => {
      const staticItem = cards.find((item) => item.for === stat.title);
      if (staticItem) {
        const temp: IDashboardCardProps = {
          ...staticItem,
          ...stat,
        };
        return temp;
      }
    });
  }, [data]);
  console.log("res: ", res);

  return (
    <div className="space-y-8">
      <div 
      // className="flex items-start gap-[1.875rem] flex-col md:flex-row md:flex-wrap"
      className="grid gap-[1.875rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {res?.map((stat) => <DashboardCard key={stat?.id} {...stat!} />)}
      </div>
      <div>
        chart here
      </div>
    </div>
  );
};

export default Dashboard;
