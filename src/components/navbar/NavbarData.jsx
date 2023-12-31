import { BookOpenIcon, ChatBubbleLeftRightIcon, UserGroupIcon, } from '@heroicons/react/24/solid';
import React from 'react';
import * as p from '../../pages';

export const NavbarData =  [
  {
    icon: <UserGroupIcon />,
    text: 'Channel',
    link: 'channels', 
    elementLabel: <p.Channel />,
  },
  {
    icon: <ChatBubbleLeftRightIcon />,
    text: 'Chats',
    link: 'chats', 
    elementLabel: <p.Chats />,
  },
  // {
  //   icon: <BookOpenIcon />,
  //   text: 'People',
  //   link: 'people', 
  //   elementLabel: <p.People />,
  // },
]
