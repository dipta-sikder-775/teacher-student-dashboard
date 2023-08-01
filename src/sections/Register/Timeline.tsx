import ATimeline from "./ATimeline";

const timelineData = [
    { value: 1, title: "Information" },
    { value: 2, title: "Security" },
    { value: 3, title: "Confirmation" },
  ];

  export default function Timeline({ currentValue }: { currentValue: number }) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-2 gap-x-8">
        {timelineData?.map((data) => (
          <ATimeline {...data} key={data.value} currentValue={currentValue} />
        ))}
      </div>
    );
  }