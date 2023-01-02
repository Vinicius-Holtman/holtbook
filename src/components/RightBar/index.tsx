import { Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import { conversationsMock } from "../../mock/conversationsMock";
import { imageList } from "../../mock/imageList";
import { Avatar } from "../Avatar";
import { AvatarGroup } from "./AvatarGroup";


export function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", md: "block" } }} mb={3}>
      <Box position="fixed">
        <Typography variant="h6" fontSize={20} fontWeight="100">Online Friends</Typography>

        <AvatarGroup />

        <Typography variant="h6" fontSize={20} fontWeight="100" mt={2} mb={2}>Latest Photos</Typography>
        <ImageList sx={{ maxWidth: 500, height: 'auto' }} cols={3} rowHeight={100} gap={5}>
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

        <Typography variant="h6" fontSize={20} fontWeight="100" mt={2}>Latest Conversation</Typography>
        {conversationsMock.map((conversation) => (
          <List sx={{ width: "100%", height: "100%", bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={conversation.author} src={conversation.imageProfileUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={conversation.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {conversation.author}
                    </Typography>
                    {conversation.content}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}

      </Box>
    </Box>

  )
}