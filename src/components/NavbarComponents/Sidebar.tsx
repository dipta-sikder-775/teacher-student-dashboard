import { LogOutButton, SidebarItem, routes } from "@components/Sidebar";
import { selectAuth } from "@redux/features/auth";
import { useAppSelector } from "@redux/hooks";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  //
  const { position } = useAppSelector(selectAuth);
  const filteredSidebarItems = routes?.filter(({ access }) => {
    if (access.includes(position!)) return true;
    return false;
  });

  return (
    <aside
      ref={sidebar}
      className={`sidebar_bg_gradient absolute left-0 top-0 z-50 flex h-screen w-[18.75rem] flex-col overflow-y-hidden text-white duration-300 ease-linear lg:static ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:relative lg:w-0"
      }`}
    >
      <div className="space-y-12">
        {/* <!-- SIDEBAR HEADER --> */}
        <SidebarHead
          setSidebarOpen={setSidebarOpen}
          trigger={trigger}
          sidebarOpen={sidebarOpen}
        />
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto px-[1.5625rem] duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          {/* sidebar items */}
          <ul className="space-y-4">
            {filteredSidebarItems?.map(({ icon, path, title }, idx) => {
              if (!path)
                return <LogOutButton icon={icon} title={title} key={idx} />;
              return (
                <SidebarItem icon={icon} title={title} key={idx} path={path} />
              );
            })}
          </ul>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;


interface ISidebarHeadProps {
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  setSidebarOpen: (value: React.SetStateAction<boolean>) => void;
  trigger: React.MutableRefObject<any>;
  sidebarOpen: boolean;
}

function SidebarHead({
  onClick,
  setSidebarOpen,
  trigger,
  sidebarOpen,
}: ISidebarHeadProps) {
  return (
    <div className="flex items-center justify-between whitespace-nowrap px-[2.875rem] py-[1.4375rem]">
      <Link to="/" className="flex items-center justify-between">
        <div className="flex">
          <img
            src="/icons/brand_logo_2.svg"
            className="mr-[0.8331rem] h-[1.6669rem] w-[1.6669rem]"
            alt="Job Task Logo"
          />
          <span className="self-center whitespace-nowrap font-montserrat text-xl font-bold leading-[1.6669rem] text-white">
            Job Task
          </span>
        </div>
      </Link>
      <button
        ref={trigger}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="block"
      >
        <img
          onClick={onClick}
          src="/icons/menu_icon.svg"
          className="h-5 w-5 cursor-pointer"
          alt="menu"
        />
      </button>
    </div>
  );
}
