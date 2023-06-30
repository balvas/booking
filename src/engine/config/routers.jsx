import React from 'react';
import Main from '../../ui/pages/Main';
import Hotels from '../../ui/pages/Hotels/index';
import About from '../../ui/pages/About';
import { links } from './links';

export const pages = [
  {
    link: links.main,
    element: <Main />,
  },
  {
    link: links.hotels,
    element: <Hotels />,
  },
  {
    link: links.about,
    element: <About />,
  },
];
