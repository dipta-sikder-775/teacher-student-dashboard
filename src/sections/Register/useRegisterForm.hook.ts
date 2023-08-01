import { useForm } from "react-hook-form";
import { IUserRegister } from "@interfaces/auth";
import { useEffect, useState } from "react";
import {
  initialSchema,
  studentSchema,
  teacherSchema,
} from "./register.validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { initialValues } from "./register.utils";
import { useRegisterMutation } from "@redux/apis/auth";

export default function useRegisterForm() {
  const [schema, setSchema] = useState(initialSchema);
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [registerAccount] = useRegisterMutation();

  const formProps = useForm<IUserRegister>({
    defaultValues: initialValues,
    reValidateMode: "onChange",
    mode: "onBlur",
    resolver: yupResolver(schema) as unknown as any,
  });

  const { errors, touchedFields } = formProps.formState;
  const isError = Object.keys(errors).length !== 0;
  const isTouched = Object.keys(touchedFields).length !== 0;

  useEffect(() => {
    const isStudent = formProps.watch("position") === "student";
    const isTeacher = formProps.watch("position") === "teacher";
    if (!isTeacher && isStudent) {
      setIsStudent(true);
      setIsTeacher(false);
      setSchema(studentSchema);
    }
    if (isTeacher && !isStudent) {
      setIsTeacher(true);
      setIsStudent(false);
      setSchema(teacherSchema);
    } else if (!isTeacher && !isStudent) {
      setIsStudent(false);
      setIsTeacher(false);
      setSchema(initialSchema);
    }
  }, [formProps.watch("position")]);

  return {
    schema,
    isPassword,
    setIsPassword,
    isConfirmPassword,
    setIsConfirmPassword,
    isTeacher,
    setIsTeacher,
    isStudent,
    setIsStudent,
    step,
    setStep,
    formProps,
    isError,
    isTouched,
    registerAccount,
  };
}
