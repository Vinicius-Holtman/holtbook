import { Avatar as MuiAvatar } from "@mui/material";

interface AvatarProps {
  src: string;
  alt?: string;
}

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <MuiAvatar
      alt="Remy Sharp" 
      src="https://picsum.photos/200/300?grayscale"
    />
  )
}