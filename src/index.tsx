import React from 'react';
import { createRoot } from 'react-dom/client';

import Editor from './components/Editor';
import './stylesheets/main.scss';

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>
);
