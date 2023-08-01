import { IDashboardCardProps } from "@interfaces/dashboard";
import { Card, Flowbite, Progress } from "flowbite-react";

const DashboardCard = ({
  title = "certificate_earned",
  total = 0,
  progress = 0,
  imgUrl = "/public/icons/completed.svg",
  progressBarClass = "",
}: IDashboardCardProps) => {
  let socialTitle = "";
  if (title === "certificate_earned") socialTitle = "Certificate earned";
  if (title === "total_course") socialTitle = "Total Task";
  if (title === "course_in_progress") socialTitle = "Course in Progress";
  if (title === "course_completed") socialTitle = "Course completed";
  return (
    <Card className="w-full max-w-[358px] shadow-lg transition-all delay-150 hover:scale-[101%] hover:shadow-xl">
      <div className="flex flex-col gap-y-16">
        <div className="flex gap-x-4">
          <img
            className="h-[3rem] w-full max-w-[3rem]"
            src={imgUrl}
            alt="dashboard-img"
          />
          <div className="space-y-[0.125rem]">
            <h2 className="font-inter text-[1.625rem] font-semibold leading-9 text-dashboard-digit-black">
              {total}
            </h2>
            <p className="font-inter text-xs font-normal leading-[1.125rem] text-secondary-text">
              {socialTitle}
            </p>
          </div>
        </div>
        {progressBarClass? (
          <div className="flex items-center justify-between gap-x-[1.4375rem]">
            <div className="flex-[95%]">
              <Flowbite
                theme={{
                  theme: {
                    progress: {
                      color: {
                        red: progressBarClass,
                      },
                    },
                  },
                }}
              >
                <Progress color="red" progress={Number(progress)} />
              </Flowbite>
            </div>
            <span className="flex-[5%] font-poppins text-sm font-medium leading-5">
              {Number(progress)}%
            </span>
          </div>
        ):<div className="inline-flex items-center gap-4 cursor-pointer">
          <h5 className="text-main-color text-sm not-italic font-medium leading-5 font-poppins">View Courses</h5>
          <img className="w-[14px] h-[8px]" src="/icons/continue_arrow_icon.svg" alt="" />
          </div>}
      </div>
    </Card>
  );
};

export default DashboardCard;
