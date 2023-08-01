
import { DevTool } from "@hookform/devtools";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Input from "@components/CustomFormComponents/Input";
import {
  closeAlert,
  errorAlertOnApiFailure,
  runLoadingAlert,
} from "@assets/alerts";
import { IUserRegister } from "@interfaces/auth";
import Select from "@components/CustomFormComponents/Select";
import Timeline from "@sections/Register/Timeline";
import RegisterSuccess from "@sections/Register/RegisterSuccess";
import {
  educationLavalOptions,
  instituteOptions,
  positionOptions,
  workTimeOptions,
} from "@sections/Register/register.utils";
import useRegisterForm from "@sections/Register/useRegisterForm.hook";

const Register = () => {
  const {
    formProps,
    isConfirmPassword,
    isError,
    isPassword,
    isStudent,
    isTeacher,
    isTouched,
    registerAccount,
    setIsConfirmPassword,
    setIsPassword,
    setStep,
    step,
  } = useRegisterForm();
  
  const { control, register, handleSubmit, formState, trigger } = formProps;
  const { errors } = formState;

  const onSubmit = async (value: IUserRegister) => {
    try {
      runLoadingAlert();
      await registerAccount(value).unwrap();
      closeAlert();
      setStep(3);
    } catch (error: any) {
      console.log("login error: ", error);
      console.log("submit values: ", value);
      errorAlertOnApiFailure({
        errorAlertProps: {
          message: error?.data?.message ?? "Something Went Wrong",
        },
      });
    }
  };

  const handleNextPage = () => {
    trigger("full_name");
    trigger("email");
    setStep(2);
  };

  const formTitle =
    step === 1 ? "Personal Information" : step === 2 ? "Security" : "";

  return (
    <div className="mt-[6.25rem] p-4 lg:p-0">
      <Timeline currentValue={step} />
      <h1 className="form_title mb-20 mt-12">{formTitle}</h1>
      {(step === 1 || step === 2) && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-full max-w-[50rem]"
          noValidate
        >
          {step === 1 && (
            <div className="space-y-6">
              <Input
                label="Full Name"
                placeholder="Enter Your Full Name Here"
                type="text"
                errorMessage={errors?.full_name?.message}
                {...register("full_name")}
              />

              <Input
                label="Email Address"
                placeholder="Enter Your Email Address Here"
                type="email"
                errorMessage={errors?.email?.message}
                {...register("email")}
              />

              <Select
                label="Position"
                placeholder="Select Position Here"
                errorMessage={errors?.position?.message}
                options={positionOptions}
                {...register("position")}
              />

              {!isTeacher && isStudent && (
                <div className="space-y-6">
                  <Select
                    label="Institute Name"
                    placeholder="Select Institute Name Here"
                    errorMessage={errors?.institution_name?.message}
                    options={instituteOptions}
                    {...register("institution_name")}
                  />

                  <Select
                    label="Education Level"
                    placeholder="Select Education Level Here"
                    errorMessage={errors?.education_level?.message}
                    options={educationLavalOptions}
                    {...register("education_level")}
                  />
                </div>
              )}

              {!isStudent && isTeacher && (
                <div className="space-y-6">
                  <Select
                    label="Institute Name"
                    placeholder="Select Institute Name Here"
                    errorMessage={errors?.institution_name?.message}
                    options={instituteOptions}
                    {...register("institution_name")}
                  />

                  <Select
                    label="Work Time"
                    placeholder="Select Work Time Here"
                    errorMessage={errors?.work_time?.message}
                    options={workTimeOptions}
                    {...register("work_time")}
                  />
                </div>
              )}

              <div className="!my-12">
                <button
                  onClick={handleNextPage}
                  disabled={isError || !isTouched}
                  className="form_button"
                  type="button"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <Input
                label="New password"
                placeholder="Enter Your New password Here"
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

              <Input
                label="Confirm Password"
                placeholder="Enter Your Confirm Password Here"
                type={isConfirmPassword ? "password" : "text"}
                errorMessage={errors?.confirm_password?.message}
                {...register("confirm_password")}
                rightIcon={
                  isPassword ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setIsConfirmPassword(false)}
                      className="h-6 w-6 text-primary-text"
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={() => setIsConfirmPassword(true)}
                      className="h-6 w-6 text-primary-text"
                    />
                  )
                }
              />

              <div className="!my-12">
                <button className="form_button" type="submit">
                  Confirm
                </button>
              </div>
            </div>
          )}

          {import.meta.env.DEV && <DevTool control={control} />}
        </form>
      )}
      {step === 3 && <RegisterSuccess />}
    </div>
  );
};

export default Register;
