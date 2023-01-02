import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from "@mui/icons-material/Home";
import { ReactNode } from 'react';

export interface SidebarOptionsProps {
 name: string;
 icon: ReactNode;
 url: string;
}

export const sidebarOptions: SidebarOptionsProps[] = [
  {
    name: "Homepage",
    icon: <HomeIcon />,
    url: "/"
  },
  {
    name: "Pages",
    icon: <ArticleIcon />,
    url: "/pages"
  },
  {
    name: "Groups",
    icon: <GroupIcon />,
    url: "/groups"
  },
  {
    name: "Marketplace",
    icon: <StorefrontIcon />,
    url: "/marketplace"
  },
  {
    name: "Friends",
    icon: <PersonIcon />,
    url: "/friends"
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
    url: "/settings"
  },
  {
    name: "Profile",
    icon: <AccountBoxIcon />,
    url: "/profile"
  },
]
