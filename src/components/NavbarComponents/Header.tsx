import { Link } from "react-router-dom";
// import DarkModeSwitcher from './DarkModeSwitcher';
// import DropdownMessage from './DropdownMessage';
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="z-999 drop-shadow-1 sticky top-0 flex w-full bg-white">
      <div className="shadow-2 flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 border-stroke block rounded-sm border bg-white p-1.5 shadow-sm "
          >
            <AiOutlineMenuUnfold className="h-5 w-5" />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={"/icons/brand_logo.svg"} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:flex sm:gap-x-4">
          {!props.sidebarOpen &&<button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 border-stroke hidden rounded-sm bg-white p-1.5 shadow-sm lg:block"
          >
            <AiOutlineMenuUnfold className="h-5 w-5" />
          </button>}

          <form className="">
            <label
              htmlFor="default-search"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <FiSearch
                  htmlFor="default-search"
                  className="h-5 w-5 cursor-pointer text-primary-text"
                />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full rounded-lg border border-primary-text bg-white py-[1.0625rem] pl-12 pr-5 text-sm text-gray-900 placeholder:text-base placeholder:font-normal placeholder:text-primary-text focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search here..."
                required
              />
            </div>
          </form>
        </div>

        <div className="2xsm:gap-7 flex items-center gap-3">
          <ul className="2xsm:gap-4 flex items-center gap-2">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
