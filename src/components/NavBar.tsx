import { DarkMode, LightMode, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, colors, IconButton, InputBase, Menu, MenuItem, styled, Toolbar, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../theme";
import HoltbookLogo from "../assets/holtbook.png"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => {
  const colors = tokens(theme.palette.mode)

  return {
    backgroundColor: colors.grey[900],
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }
})

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}))

const LogoHoltbook = styled("img")(({ theme }) => ({
  width: 30,
  height: 30
}))

export function NavBar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { toggleColorMode } = useContext(ColorModeContext)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <AppBar position="sticky" sx={{ mb: "10px", backgroundColor: colors.green[500] }}>
      <StyledToolbar>
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
          HOLTBOOK
        </Typography>
        <LogoHoltbook src={HoltbookLogo} alt="Logo image holtbook" sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Box display="flex" gap="20px" alignItems="center">

          <Icons>
            <IconButton onClick={toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ color: "#fff" }} />
              ) : (
                <LightMode sx={{ color: "#fff" }} />
              )}
            </IconButton>
            <Badge badgeContent={4} color="primary">
              <Mail />
            </Badge>

            <Badge badgeContent={4} color="primary">
              <Notifications />
            </Badge>
          </Icons>

          <UserBox onClick={() => setOpenMenu(true)}>
            <Avatar
              src="https://github.com/Vinicius-Holtman.png"
              alt="profile-user-image"
              sx={{ width: 30, height: 30 }}
            />
            <Typography sx={{ display: { [theme.breakpoints.up("sm")]: { display: "none" } } }}>Vinicius Holtman</Typography>
          </UserBox>


        </Box>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}