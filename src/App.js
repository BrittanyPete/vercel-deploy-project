import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './index.css'


import Header from './components/Header';
import Home from './components/Home';
import List from './components/List';
import MyList from './components/List';
import AddItem from './components/AddItem';


const App = () => {


  return (
    <div className="container">
      <div>
      <Header />
      </div>
      <hr/>

      <div>
        <Switch>

        <Route path='/add'>
          <AddItem />
        </Route>

        <Route path='/my-list'>
          <MyList/>
        </Route>

        <Route path='/list'>
          <List/>
        </Route>

        <Route path='/home'>
          <Home />
        </Route>

        <Route path='/'>
          <Redirect to='/home'/>
        </Route>

        </Switch>
      

      </div>
    </div>
  );
}

export default App;
