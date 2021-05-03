import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
              <h1>This is login</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
