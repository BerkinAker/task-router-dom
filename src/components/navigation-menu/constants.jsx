import { RxDashboard } from "react-icons/rx";
import { RiTaskLine } from "react-icons/ri";

export const MENU = [
  {
    id: 0,
    icon: <RxDashboard />,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    icon: <RiTaskLine />,
    title: "Tasks",
    href: "/tasks",
  },
];