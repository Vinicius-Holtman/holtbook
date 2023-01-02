import { Box, List } from "@mui/material";

import { SidebarItem } from "./SidebarItem";
import { sidebarOptions, SidebarOptionsProps } from "./sidebarOptions";

export function Sidebar() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" }}}>
      <Box position="fixed">
         <List>
          {sidebarOptions.map((option: SidebarOptionsProps) => (
            <SidebarItem name={option.name} icon={option.icon} url={option.url} />
          ))}
        </List>
      </Box>
    </Box>
  )
}