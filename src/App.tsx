import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import ErrorBoundary from './Components/ErrorBoundary'
import Error from './Components/ErrorPage'
import Lodr from './Components/loader'
import Navbar from './Components/Navbar'
const Cards = React.lazy(() => import('./Components/TeamCards'))
const Team = React.lazy(() => import('./Components/PlayerCards'))
function App() {
  return (
    <Router>
      <Navbar />
      <ErrorBoundary>
        <div className="App">
          <React.Suspense fallback={<Lodr />}>
            <Switch>
              <Route exact={true} path="/" component={Cards} />
              <Route exact={true} path="/team" component={Cards} />
              <Route exact={true} path="/team/:url" component={Team} />
              <Route component={Error} />
            </Switch>
          </React.Suspense>
        </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App
