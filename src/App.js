import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AddStudent from './components/AddStudent/AddStudent';
import AddSubject from './components/AddSubject/AddSubject';
import ManageStudent from './components/ManageStudent/ManageStudent';
import ManageSubject from './components/ManageSubject/ManageSubject';

function App() {
  return (
    <div>
        <Router>
        <Switch>
          <Route path="/header">
            <Header></Header>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          
          <Route path="/home">
            <Home></Home>
          </Route>
         
          <Route path="/addStudent">
            <AddStudent></AddStudent>
          </Route>
          <Route path="/addSubject">
            <AddSubject></AddSubject>
          </Route>
          <Route path="/manageStudent">
            <ManageStudent></ManageStudent>
          </Route>
          <Route path="/manageSubject">
            <ManageSubject></ManageSubject>
          </Route>
           <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
