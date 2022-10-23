// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import { Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/configureStore';
import Greetings from './components/Greetings';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);