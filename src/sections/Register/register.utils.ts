import { IUserRegister } from "@interfaces/auth";

export const positionOptions = [
  { name: "Teacher", value: "teacher" },
  { name: "Student", value: "student" },
];
export const workTimeOptions = [
  { name: "Part Time", value: "part_time" },
  { name: "Full Time", value: "full_time" },
];
export const instituteOptions = [
  {
    name: "Dhaka National Medical College",
    value: "Dhaka National Medical College",
  },
  { name: "Ibrahim Medical College", value: "Ibrahim Medical College" },
  { name: "Bangladesh Medical College", value: "Bangladesh Medical College" },
  {
    name: "Holy Family Red Crescent Medical College",
    value: "Holy Family Red Crescent Medical College",
  },
];
export const educationLavalOptions = [
  {
    name: "Secondary School Certificate (SSC )",
    value: "Secondary School Certificate (SSC )",
  },
  {
    name: "Higher Secondary School Certificate (HSC)",
    value: "Higher Secondary School Certificate (HSC)",
  },
  { name: "Diploma", value: "Diploma" },
  { name: "Bachelor of Science (BSC)", value: "Bachelor of Science (BSC)" },
  { name: "Master of Arts(MA)", value: "Master of Arts(MA)" },
  { name: "Bachelor of Arts(BA)", value: "Bachelor of Arts(BA)" },
];

export const initialValues: IUserRegister = {
  full_name: "",
  email: "",
  position: "",
  institution_name: "",
  education_level: "",
  work_time: "",
  password: "",
  confirm_password: "",
};
