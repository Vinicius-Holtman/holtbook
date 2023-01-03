import { Box, Button, List, Switch, Typography } from "@mui/material";

import { SidebarItem } from "./SidebarItem";
import { sidebarOptions, SidebarOptionsProps } from "./sidebarOptions";
import { useState } from "react";

export function Sidebar() {
  const [toggleSidebar, setToggleSidebar] = useState(true)

  return (
    <Box flex={toggleSidebar ? 1 : 0.20} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {sidebarOptions.map((option: SidebarOptionsProps) => (
            <SidebarItem name={option.name} icon={option.icon} url={option.url} toggleSidebar={toggleSidebar} />
          ))}
        </List>
        <Button sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Switch checked={toggleSidebar} onClick={() => setToggleSidebar(!toggleSidebar)} />
        </Button>
      </Box>
    </Box>
  )
}