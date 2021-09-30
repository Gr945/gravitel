
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory()
  return (
    <div className="App">
        <Switch>
        <Route exact path="/">
          <div>{history.push('/login')}</div>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
