import { useLocation, useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { logout, selectAuth } from "@redux/features/auth";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

export const routes = [
  {
    path: "/dashboard/home",
    title: "Dashboard",
    icon: "/icons/home_icon.svg",
    access: ["teacher", "student"],
  },
  {
    path: "/dashboard/courses",
    title: "Courses",
    icon: "/icons/star_list_icon.svg",
    access: ["teacher", "student"],
  },
  {
    path: "/dashboard/add-new-course",
    title: "Add New Course",
    icon: "/icons/new_course_icon.svg",
    access: ["teacher"],
  },
  {
    path: "/dashboard/account",
    title: "Account",
    icon: "/icons/user_icon.svg",
    access: ["teacher", "student"],
  },
  {
    title: "Logout",
    icon: "/icons/logout_icon.svg",
    access: ["teacher", "student"],
  },
];

const ExampleSidebar = function () {
  const { position } = useAppSelector(selectAuth);
  const filteredSidebarItems = routes?.filter(({ access }) => {
    if (access.includes(position!)) return true;
    return false;
  });

  return (
    <aside
      id="logo-sidebar"
      className="fixed left-0 top-0 z-40 h-screen w-[18.75rem] -translate-x-full transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-gradient-to-b from-sidebar-gradient-start to-sidebar-gradient-end px-[1.5625rem] dark:bg-gray-800 ">
        <SidebarHead />
        <ul className="mt-12 space-y-4">
          {filteredSidebarItems?.map(({ icon, path, title }, idx) => {
            if (!path)
              return <LogOutButton icon={icon} title={title} key={idx} />;
            return (
              <SidebarItem icon={icon} title={title} key={idx} path={path} />
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ExampleSidebar;

interface ISidebarItemProps {
  icon: string;
  title: string;
  path?: string;
}

export function LogOutButton({ icon, title }: ISidebarItemProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <li>
      <div className="group flex cursor-pointer items-center rounded-lg px-4 py-[1.0625rem] text-white hover:bg-white/20">
        <div
          onClick={handleLogout}
          className="flex items-center justify-center gap-x-3"
        >
          <img
            className="h-4 w-4 text-white transition duration-75"
            src={icon}
            alt=""
          />
          <span className="font-inter text-sm font-medium leading-[1.0588rem] text-white">
            {title}
          </span>
        </div>
      </div>
    </li>
  );
}

export function SidebarItem({ icon, title, path }: ISidebarItemProps) {
  const { pathname } = useLocation();
  const isActive = pathname.includes(path!);

  return (
    <li>
      <NavLink
        to={path ?? ""}
        className={`group flex cursor-pointer items-center rounded-lg px-4 py-[1.0625rem] text-white hover:bg-white/20 ${
          isActive && "bg-white/10"
        }`}
      >
        <div className="flex items-center justify-center gap-x-3">
          <img
            className="h-4 w-4 text-white transition duration-75"
            src={icon}
            alt=""
          />
          <span className="font-inter text-sm font-medium leading-[1.0588rem] text-white">
            {title}
          </span>
        </div>
      </NavLink>
    </li>
  );
}

interface ISidebarHeadProps {
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export function SidebarHead({ onClick }: ISidebarHeadProps) {
  return (
    <div className="flex items-center justify-between whitespace-nowrap px-4 py-[1.4375rem]">
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
      <img
        onClick={onClick}
        src="/icons/menu_icon.svg"
        className="h-5 w-5 cursor-pointer"
        alt="menu"
      />
    </div>
  );
}
