export default function ATimeline({
    value = 1,
    currentValue = 1,
    title = "Title",
  }: {
    value: number;
    currentValue: number;
    title: string;
  }) {
    const isActive = currentValue >= value;
    return (
      <div>
        <div className="flex items-center justify-center gap-2">
          <div
            className={`font-inter; flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold not-italic leading-[140%] tracking-[0.2px]
            ${isActive ? "bg-beguni text-white" : "border-2 border-beguni"}`}
          >
            {value}
          </div>
          <div className={`w-[7.125rem] border-b-2 border-beguni`} />
          <div className="font-inter text-2xl font-medium not-italic leading-[140%] tracking-[0.2px] text-black">
            {title}
          </div>
        </div>
      </div>
    );
  }