import { ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface SidebarItemProps {
  url: string;
  icon: ReactNode;
  name: string;
  toggleSidebar: boolean;
}

export function SidebarItem({ url, icon, name, toggleSidebar }: SidebarItemProps) {
  const theme = useTheme()

  return (
    <>
      {toggleSidebar ? (
        <ListItem sx={{ width: !toggleSidebar ? "50px" : theme.shape }} disablePadding>
          <ListItemButton component="a" href={url}>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText
              sx={{ display: !toggleSidebar ? "none" : "flex" }}
              primary={name}
            />
          </ListItemButton>
        </ListItem>
      ) : (
        <Tooltip title={name} >
          <ListItem sx={{ width: !toggleSidebar ? "50px" : theme.shape }} disablePadding>
            <ListItemButton component="a" href={url}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText
                sx={{ display: !toggleSidebar ? "none" : "flex" }}
                primary={name}
              />
            </ListItemButton>
          </ListItem>
        </Tooltip>
      )}
    </>
  )
}