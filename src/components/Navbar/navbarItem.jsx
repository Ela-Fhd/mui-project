import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StorageIcon from "@mui/icons-material/Storage";
import SdCardIcon from "@mui/icons-material/SdCard";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export const navbarItem = [
  {
    id: 1,
    title: "authentication",
    route: "/authentication",
    icon: <PeopleAltIcon />,
  },
  {
    id: 2,
    title: "database",
    route: "/database",
    icon: <StorageIcon />,
  },
  {
    id: 3,
    title: "storage",
    route: "/storage",
    icon: <SdCardIcon />,
  },
  {
    id: 4,
    title: "hoisting",
    route: "/hoisting",
    icon: <DataObjectIcon />,
  },
  {
    id: 5,
    title: "function",
    route: "/function",
    icon: <CodeIcon />,
  },

  {
    id: 6,
    title: "machinLearning",
    route: "/machinLearning",
    icon: <MenuBookIcon />,
  },
];
