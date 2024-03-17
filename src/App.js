import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginPage} />
          {/* Other routes go here */}
        </Switch>
      </div>
    </Router>
  );
}
