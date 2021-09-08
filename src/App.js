import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from "./pages/mainPage";
import NavBar from './components/Navbar';
import Top from './components/top';
import MyPage from './pages/myPage';
import NotePage from './pages/notePage';
import WatchListPage from './pages/watchlistPage';
import WholePage from './pages/wholePage';
import FictiPage from './pages/fictiPage';
import ActualPage from './pages/actualPage';

// TODO: menuBar 위에 top.js 동시 클릭 현상 막기


function App() {
  return (

  <div>
    <Top />
    <Router>
      <NavBar />
      <Route exact path='/' component={Main}/>
      <Switch>
        <Route path='/watchlistpage' component={WatchListPage} />
        <Route path='/notepage' component={NotePage} />
        <Route path='/mypage' component={MyPage} />
        <Route path='/whole' component={WholePage} />
        <Route path='/ficti' component={FictiPage} />
        <Route path='/actual' component={ActualPage} />
      </Switch>
    </Router>
    </div>

    
    



    
    // <div className="App">
    //   <mainPage/>
    //   <header className="App-header">
    //     <p>안녕하신가</p>
        
    //   </header>
    // </div>
  );
}

export default App;
