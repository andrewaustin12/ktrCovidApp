import './App.css';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/SignupPage" component={SignupPage} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
