import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import { useState } from "react";
import { tokens } from "../theme";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from "@mui/icons-material/Image";
import DateRangeIcon from '@mui/icons-material/DateRange';

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
}))

export function AddPost() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [openModal, setOpenModal] = useState(false)

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: colors.grey[900],
    color: colors.grey[300],
    borderRadius: "5px",
    boxShadow: 24,
    p: 2,
    width: 400,
    height: 280,
  };

  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed", bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 }
        }}
        onClick={() => setOpenModal(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://github.com/Vinicius-Holtman.png"
              alt="profile-user-image"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={600}>Vinicius Holtman</Typography>
          </UserBox>

          <TextField
            fullWidth
            id="standard-multiline-static"
            multiline
            rows={3}
            defaultValue="What`s on your mind?"
            variant="standard"
          />
          <Stack
            direction="row"
            gap={1}
            mt={2}
            mb={3}
          >
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>

          <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
            <Button>
              Post
            </Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}