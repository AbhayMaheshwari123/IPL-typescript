import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Cards from './Components/TeamCards';
import Team from './Components/PlayerCards';
import Error from './Components/ErrorPage';
import ErrorBoundary from './Components/ErrorBoundary';
import Lodr from './Components/loader';
function App() {
  return (
    <Router>
        <Navbar />
        <Lodr/>
        <ErrorBoundary>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Cards}  />
            <Route exact path='/team' component ={Cards} />
            <Route exact path='/team/:url' component ={Team} />
            <Route component={Error}/>
          </Switch>
        </div>
        </ErrorBoundary>
    </Router>
  );
}

export default App;
