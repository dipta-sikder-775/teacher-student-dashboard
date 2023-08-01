import { IUserRegister } from '@interfaces/auth';
import * as Yup from 'yup'

export const initialSchema = Yup.object<IUserRegister>().shape({
    full_name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Email is not Valid").required("Email is Required"),
    position: Yup.string().required("Position is Required"),
    institution_name: Yup.string(),
    education_level: Yup.string(),
    work_time: Yup.string(),
    password: Yup.string(),
    confirm_password: Yup.string(),
  });
  
 export const studentSchema = Yup.object<IUserRegister>().shape({
    full_name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Email is not Valid").required("Email is Required"),
    position: Yup.string().required("Position is Required"),
    institution_name: Yup.string().required("Institution name is Required"),
    education_level: Yup.string().required("Education level is Required"), //for student
    work_time: Yup.string(), //for teacher
    password: Yup.string().min(6).max(50).required("Password is Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is Required"),
  });
  
 export const teacherSchema = Yup.object<IUserRegister>().shape({
    full_name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Email is not Valid").required("Email is Required"),
    position: Yup.string().required("Position is Required"),
    institution_name: Yup.string().required("Institution name is Required"),
    education_level: Yup.string(), //for student
    work_time: Yup.string().required("Work time is Required"), //for teacher
    password: Yup.string().min(6).max(50).required("Password is Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is Required"),
  });