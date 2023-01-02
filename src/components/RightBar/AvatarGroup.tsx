import { AvatarGroup as MuiAvatarGroup, Box } from "@mui/material";
import { Avatar } from "../Avatar";

export function AvatarGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
      }}
    >
      <MuiAvatarGroup max={9}>
        <Avatar
          alt="Travis Howard"
          src="https://picsum.photos/200/300?grayscale"
        />
        <Avatar
          alt="Travis Howard"
          src="https://picsum.photos/200/300?grayscale"
        />
        <Avatar
          alt="Travis Howard"
          src="https://picsum.photos/200/300?grayscale"
        />
        <Avatar
          alt="Travis Howard"
          src="https://picsum.photos/200/300?grayscale"
        />
      </MuiAvatarGroup>
    </Box>
  )
}