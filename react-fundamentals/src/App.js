import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router
} from 'react-router-dom'; //react-router-dom, allows us to navigate to different sections of our single page application, without causing the page to redirect or refresh.

function App() {
  return(
    <div className='App'>
      <Header />
      <Router>{/* In order for react-router-dom to work, everything that is part of the package has to be wrapped in a Router. */}
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
