interface ICourses{
    
}

const Courses = () => {
  return (
    <div>
        <div className="shadow-lg relative flex flex-col justify-center items-center gap-4 pt-2 pb-4 px-2 rounded-2xl bg-white max-w-[338px] hover:scale-[101%] hover:shadow-xl delay-150 transition-all">

        <div className="relative">
          <img
            className="w-full rounded-lg"
            src="/public/icons/course_sample_img.svg"
            alt=""
          />
          <div className="absolute right-[16.832px] top-4 flex items-start gap-2.5 rounded-md bg-white px-2.5 py-0.5 font-poppins text-xs font-medium not-italic leading-6 text-[#102844] backdrop-blur-[75px]">
            4D Animation
          </div>
        </div>
        <div className="flex flex-col items-start gap-[50px] self-stretch">
          <h4
            className="font-poppins; text-[15px] font-medium not-italic leading-[22px] text-[#102844]"
          >
            Learning Maxon 4D Training Course
          </h4>
          <div className="flex items-center justify-between self-stretch">
            <div className="flex items-center gap-2">
              <img
                className="h-[16.142px] w-[19.729px]"
                src="/icons/lesson_video_logo.svg"
                alt=""
              />
              <h5 className="font-poppins text-sm font-normal not-italic leading-5 text-[#767278]"></h5>
            </div>
            <div className="flex items-center justify-center gap-2.5 rounded-lg bg-beguni px-4 py-2 text-right font-poppins text-sm font-medium not-italic leading-[normal] text-[color:var(--white,#FFF)]">
              $140
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Courses;
