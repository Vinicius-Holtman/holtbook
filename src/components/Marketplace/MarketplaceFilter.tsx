import { Box, InputBase, styled } from "@mui/material";
import { tokens } from "../../theme";

const Search = styled("div")(({ theme }) => {
  const colors = tokens(theme.palette.mode)

  return {
    backgroundColor: colors.grey[900],
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }
})

export function MarketplaceFilter() {
  return (
    <Box flex={1.70} bgcolor="pink">
      <Box position="fixed">
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
      </Box>
    </Box>
  )
}