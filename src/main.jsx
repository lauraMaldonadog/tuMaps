import React from 'react'
import ReactDOM from 'react-dom/client'
import AppMapa from './AppMapa.jsx'
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <AppMapa/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
