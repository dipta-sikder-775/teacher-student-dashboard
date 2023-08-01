import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { useLoginMutation } from "@redux/apis/auth";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import Input from "@components/CustomFormComponents/Input";
import { Link } from "react-router-dom";
import {
  errorAlertOnApiFailure,
  runLoadingAlert,
  successAlertOnApiSuccess,
} from "@assets/alerts";

const initialValues = {
  email: "",
  password: "",
};

type TFormValues = typeof initialValues;

const schema = Yup.object<TFormValues>().shape({
  email: Yup.string().email("Email is not Valid").required("Email is Required"),
  password: Yup.string().min(6).max(50).required("Password is Required"),
});

const Login = () => {
  const [isPassword, setIsPassword] = useState(true);
  console.log({ isPassword });
  const [loginFn] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    reset,
    trigger,
    watch,
    control,
  } = useForm<TFormValues>({
    defaultValues: initialValues,
    reValidateMode: "onChange",
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { errors, isDirty, isLoading, isValid, isSubmitting } = formState;
  console.log({ isDirty, isLoading, isValid, isSubmitting });

  const onSubmit = async (value: TFormValues) => {
    try {
      runLoadingAlert();
      await loginFn(value).unwrap();
      successAlertOnApiSuccess({errorAlertProps:{title:"Success",message:"Login Successful"}});
    } catch (error: any) {
      errorAlertOnApiFailure({
        errorAlertProps: {
          message: error?.data?.message ?? "Something Went Wrong",
        },
      });
    }
  };

  return (
    <div className="mx-auto mt-[6.25rem] w-full max-w-[50rem] p-4 lg:p-0">
      <h1 className="form_title mb-20">Welcome To Task Job</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <Input
          label="Email*"
          placeholder="Enter Your Email Here"
          type="text"
          errorMessage={errors?.email?.message}
          {...register("email")}
        />

        <Input
          label="Password*"
          placeholder="Enter Your Password Here"
          type={isPassword ? "password" : "text"}
          errorMessage={errors?.password?.message}
          {...register("password")}
          rightIcon={
            isPassword ? (
              <AiOutlineEyeInvisible
                onClick={() => setIsPassword(false)}
                className="h-6 w-6 text-primary-text"
              />
            ) : (
              <AiOutlineEye
                onClick={() => setIsPassword(true)}
                className="h-6 w-6 text-primary-text"
              />
            )
          }
        />

        <div className="!my-12">
          <button className="form_button">Submit</button>
        </div>

        <p className="form_footer">
          Don’t Have An Account?{" "}
          <Link to="/register" className="form_footer_highlight">
            Register Now
          </Link>
        </p>

        {import.meta.env.DEV && <DevTool control={control} />}
      </form>
    </div>
  );
};
export default Login;
