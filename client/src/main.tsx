import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom' 
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from './themes';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <NextUIProvider theme={darkTheme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NextUIProvider>
  </BrowserRouter>
)
