import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header.js';
import Content from './Content/Content.js'
import Footer from './footer/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>
);

