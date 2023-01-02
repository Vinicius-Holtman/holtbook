import { Box, Stack } from "@mui/material";
import { AddPost } from "../components/AddPost";
import { Feed } from "../components/Feed";
import { RightBar } from "../components/RightBar";
import { Sidebar } from "../components/Sidebar";

export function Home() {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
      <AddPost />
    </>
  )
}