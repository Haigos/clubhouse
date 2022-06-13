// styles
import './App.css'

// react router
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// pages
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>

            <Route exact path='/signup'>
              <Signup />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path='/project/:id'>
              <Project />
            </Route>

            <Route exact path='/create'>
              <Create />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App

