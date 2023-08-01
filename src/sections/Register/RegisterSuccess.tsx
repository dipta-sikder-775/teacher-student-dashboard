import { Link } from "react-router-dom";

export default function RegisterSuccess() {
    return (
      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-6 p-8">
          <img
            className="h-[15.625rem] w-[15.625rem]"
            src="/icons/success_icon.svg"
            alt=""
          />
          <div className="flex flex-col items-center gap-4 self-stretch">
            <h4 className="font-inter text-[32px] font-semibold not-italic leading-[140%] tracking-[0.2px] text-primary-text">
              Thank You!
            </h4>
            <p className="w-full max-w-[485px] text-center font-poppins text-2xl font-normal not-italic leading-8 text-[#9F9F9F]">
              Account Has Been Created. Enjoy Job Task.
            </p>
          </div>
        </div>
        <div>
          <Link
            to="/"
            className=" mt-12 flex items-center gap-2.5 self-stretch rounded-lg px-16 py-6 text-center font-inter text-2xl font-semibold not-italic leading-[normal] text-beguni border border-beguni"
            type="button"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }