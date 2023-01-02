import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ReactNode } from "react";

interface SidebarItemProps {
  url: string;
  icon: ReactNode;
  name: string;
}

export function SidebarItem({ url, icon, name }: SidebarItemProps) {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={url}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  )
}