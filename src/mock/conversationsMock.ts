import {v4 as uuidv4} from 'uuid';

export const conversationsMock = [
  {
    id: uuidv4(),
    title: "Brunch this weekend?",
    author: "Ali Connors",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageProfileUrl: "https://picsum.photos/200/300?grayscale"
  },
  {
    id: uuidv4(),
    title: "Summer BBQ",
    author: "to Scott, Alex, Jennifer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageProfileUrl: "https://picsum.photos/200/300?grayscale"
  },
  {
    id: uuidv4(),
    title: "Oui Oui",
    author: "Sandra Adams",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageProfileUrl: "https://picsum.photos/200/300?grayscale"
  },
]