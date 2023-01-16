import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom' 
import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from './themes';
import { store } from './store';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={ store }>
    <BrowserRouter>
      <NextUIProvider theme={darkTheme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </NextUIProvider>
    </BrowserRouter>
  </Provider>
)
