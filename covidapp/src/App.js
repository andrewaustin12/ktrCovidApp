import './App.css';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <Route exact path="/" component={HomePage} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
