import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from "./pages/mainPage";
import NavBar from './components/Navbar';
import Top from './components/top';
import MyPage from './pages/myPage';
import WatchListPage from './pages/watchlistPage';
import WholePage from './pages/wholePage';
import FictiPage from './pages/fictiPage';
import ActualPage from './pages/actualPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import NotePage from './pages/notePage';
import FindPassPage from './pages/findPassPage';

function App() {
  return (

  <div>
    <Top />
    <Router>
      <NavBar />
      <Route exact path='/' component={Main}/>
      <Switch>
        <Route path='/watchlistpage' component={WatchListPage} />
        <Route path='/loginpage' component={LoginPage} />
        <Route path='/mypage' component={MyPage} />
        <Route path='/whole' component={WholePage} />
        <Route path='/ficti' component={FictiPage} />
        <Route path='/actual' component={ActualPage} />
        <Route path="/register" component={RegisterPage}/>
        <Route path="/notepage" component={NotePage}/>
        <Route path="/findpass" component={FindPassPage}/>
        <Route
          render={({location})=>(
            <div>
              <h2>이 페이지는 존재하지 않습니다: {location.pathname}</h2>
            </div>
          )}
          />
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
