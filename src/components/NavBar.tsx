import { DarkMode, LightMode, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, styled, Toolbar, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => {
  return {
    backgroundColor: "#005139",
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



export function NavBar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { toggleColorMode } = useContext(ColorModeContext)

  // console.log(`estou aquiiiiii!!!`,theme.palette.mode)

  return (
    <AppBar position="sticky" sx={{ mb: "10px", backgroundColor: colors.green[500] }}>
      <StyledToolbar>
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
          HOLTBOOK
        </Typography>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Box display="flex" gap="20px" alignItems="center">
          
          <Icons>
            <IconButton onClick={toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkMode  sx={{ color: "#fff"}} />
                ) : (
                <LightMode sx={{ color: "#fff"}} />
              )}
            </IconButton>
            <Badge badgeContent={4} color="primary">
              <Mail />
            </Badge>

            <Badge badgeContent={4} color="primary">
              <Notifications />
            </Badge>
          </Icons>

          <UserBox>
            <Avatar src="https://github.com/Vinicius-Holtman.png" alt="profile-user-image" sx={{ width: 30, height: 30 }} />
            <Typography sx={{ display: {[theme.breakpoints.up("sm")]: { display: "none" }}}}>Vinicius Holtman</Typography>
          </UserBox>


        </Box>
      </StyledToolbar>
    </AppBar>
  )
}