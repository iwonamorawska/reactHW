import React from 'react';
import ReactDOM from 'react-dom';
import Elephant from './App';
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Elephant />
      </Router>
      
  </React.StrictMode>,
  document.getElementById('root')
);


