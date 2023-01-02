import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import { imageList } from "../mock/imageList";


export function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight="100">Online Friends</Typography>

        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300?grayscale" />
          <Avatar alt="Travis Howard" src="https://picsum.photos/200/300?grayscale" />
          <Avatar alt="Cindy Baker" src="https://picsum.photos/200/300?grayscale" />
          <Avatar alt="Agnes Walker" src="https://picsum.photos/200/300?grayscale" />
          <Avatar alt="Trevor Henderson" src="https://picsum.photos/200/300?grayscale" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight="100" mt={2} mb={2}>Latest Photos</Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={100} gap={5}>
          {imageList.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight="100" mt={2}>Latest Conversitation</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300?grayscale" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://picsum.photos/200/300?grayscale" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://picsum.photos/200/300?grayscale" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

      </Box>
    </Box>

  )
}