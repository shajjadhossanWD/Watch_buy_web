import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import Allwatch from './Component/AllWatch/AllWatch/Allwatch';
import Login from './Component/Login/Login/Login';
import Register from './Component/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Purchase from './Component/Purchase/Purchase';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/all_watch">
              <Allwatch></Allwatch>
            </Route>
            <Route path="/login">
             <Login></Login>
             </Route>
             <Route path="/register">
              <Register></Register>
             </Route>
             <PrivateRoute path="/purchase/:productName">
               <Purchase></Purchase>
             </PrivateRoute>
             <PrivateRoute path="/dashboard">
               <Dashboard></Dashboard>
             </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
       </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
