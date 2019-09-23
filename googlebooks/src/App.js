import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Saved from "./pages/Saved"
import Search from "./pages/Search"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
