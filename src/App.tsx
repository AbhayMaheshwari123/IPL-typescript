import * as React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Error from './Components/ErrorPage';
import ErrorBoundary from './Components/ErrorBoundary';
import Lodr from './Components/loader';
const Cards=React.lazy(()=>import('./Components/TeamCards'));
const Team=React.lazy (()=>import('./Components/PlayerCards'));
function App() {
  return (
    <Router>
        <Navbar />
        <ErrorBoundary>
        <div className="App">
        <React.Suspense fallback={<Lodr/>}>
            <Switch>
              <Route exact path='/' component={Cards}  />
              <Route exact path='/team' component ={Cards} />
              <Route exact path='/team/:url' component ={Team} />
              <Route component={Error}/>
            </Switch>
        </React.Suspense>
        </div>
        </ErrorBoundary>
    </Router>
  );
}

export default App;
