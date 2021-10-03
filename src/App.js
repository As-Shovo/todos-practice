import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Home from './component/Home/Home';
import Todos from './component/Todos/Todos';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import SingleTodo from './component/SingleTodo/SingleTodo';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route eaxt path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/todos'>
            <Todos></Todos>
          </Route>
          <Route exact path='/todos/:id'>
            <SingleTodo></SingleTodo>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
