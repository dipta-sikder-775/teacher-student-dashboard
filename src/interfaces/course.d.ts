// create course
export interface ICreateCourse {
  main_course_file: File;
  thumbnail_file: File;
  introduction_file: File;
  tags: string;
  lesson_name: string;
  description: string;
  price: number;
}

export interface ICreateCourseRes {
  status?: boolean;
  message?: string;
}

// list
export interface IAddList {
  perpage: number;
  page: number;
}

export interface IList {
  id?: string;
  teacher_id?: string;
  lesson_name?: string;
  description?: string;
  price?: number;
  tags?: string[];
  main_course_file?: string;
  thumbnail_file?: string;
  introduction_file?: string;
}

export interface IAddListRes {
  status?: boolean;
  send_res?: IList[];
  total_count?: number;
  message?: string;
}

// add details
export interface IAddDetails {
  course_id: string;
}

export interface ITeacherInfo {
  teacher_id?: string;
  full_name?: string;
  institution_name?: string;
}

export interface ICommentInfo {
  comment_id?: string;
  course_id?: string;
  user_info?: IUserInfo;
  comment?: string;
  created_at?: string;
}

export interface ISendRes {
  course_id?: string;
  lesson_name?: string;
  description?: string;
  price?: number;
  tags?: string[];
  main_course_file?: string;
  thumbnail_file?: string;
  introduction_file?: string;
  teacher_info?: ITeacherInfo;
  comment_info?: ICommentInfo[];
}

export interface IUserInfo {
  user_id: string;
  full_name: string;
}

export interface IAddDetailsRes {
  status?: boolean;
  send_res?: ISendRes;
  message?: string;
}

// add comment
export interface IAddComment {
  course_id: string;
  comment: string;
}

export interface IAddCommentRes {
  status?: boolean;
  message?: string;
}
