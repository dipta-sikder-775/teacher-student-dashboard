// static
export interface IStatic {
  id?: number;
  title?: "course_completed" | "certificate_earned" | "course_in_progress" | "total_course";
  total?: number;
  progress?: number | string;
}

export interface IDashboardCardStyle {
  imgUrl: string;
  progressBarClass?: string;
  for: "course_completed" | "certificate_earned" | "course_in_progress" | "total_course";
}

export type IDashboardCardProps = IStatic & IDashboardCardStyle;

export interface IGetStaticRes {
  status?: boolean;
  statics?: IStatic[];
  message?: string;
}

// chart
export interface IGetChart {
  time_period: "monthly" | "yearly" | "weekly";
}

export interface IProgress {
  date?: string;
  watchHours?: number;
  dayName?: string;
}

export interface IGetChartRes {
  status?: boolean;
  progress?: IProgress[];
  message?: string;
}
