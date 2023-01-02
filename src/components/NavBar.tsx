import { DarkMode, LightMode, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, styled, Toolbar, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => {
  const colors = tokens(theme.palette.mode)

  return {
    backgroundColor: `${colors.grey[400]}`,
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }
})

export function NavBar() {
  const theme = useTheme()
  const { toggleColorMode } = useContext(ColorModeContext)

  return (
    <AppBar position="sticky" sx={{ mb: "10px" }}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          HOLTBOOK
        </Typography>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Box display="flex" gap="20px" alignItems="center">
          <IconButton onClick={toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkMode />
              ) : (
              <LightMode />
            )}
          </IconButton>
          <Badge badgeContent={4} color="primary">
            <Mail />
          </Badge>

          <Badge badgeContent={4} color="primary">
            <Notifications />
          </Badge>

          <Avatar src="https://github.com/Vinicius-Holtman.png" alt="profile-user-image" sx={{ width: 30, height: 30 }} />

        </Box>
      </StyledToolbar>
    </AppBar>
  )
}