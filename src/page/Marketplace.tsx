import { Box, Stack } from "@mui/material";
import { MarketplaceFilter } from "../components/Marketplace/MarketplaceFilter";
import { Product } from "../components/Marketplace/Product";
import { Sidebar } from "../components/Sidebar";



export function Marketplace() {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <MarketplaceFilter />
        <Product />
      </Stack>
    </Box>
  )
}