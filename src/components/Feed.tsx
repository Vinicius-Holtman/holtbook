import { Box } from "@mui/material";
import { Post } from "./Post";

export function Feed() {
  return (
    <Box display="flex" flexDirection="column" gap={4} flex={4} p={2}>
     <Post />
     <Post />
     <Post />
    </Box>
  )
}