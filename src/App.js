import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/mainPage";

import ActualDetailPage from "./pages/actualDetailPage";
import ActualListPage from "./pages/actualListPage";
import ActualPostingPage from "./pages/actualPostingPage";
import ActualForm from "./pages/actualForm";

import FictiListPage from "./pages/fictiListPage";
import FictiPostingPage from "./pages/fictiPostingPage";
import FictiForm from "./pages/fictiForm";

import NavBar from "./components/Navbar";
import Top from "./components/top";
import MyPage from "./pages/MyPage";
import NotePage from "./pages/notePage";
import WatchListPage from "./pages/watchlistPage";
import WholePage from "./pages/wholePage";
import Community from "./pages/community";
import Update from "./pages/update";
import MyinfoPage from "./pages/myinfoPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import FindPassPage from "./pages/findPassPage";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div>
      <Router>
        <Top />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/watchlistpage" component={WatchListPage} />
          <Route path="/loginpage" component={LoginPage} />
          <Route path="/my" component={MyPage} />
          <Route path="/whole" component={WholePage} />

          <Route path="/actualForm" component={ActualForm} />
          <Route path="/actualdetailpage" component={ActualDetailPage} />
          <Route path="/actualpostingpage" component={ActualPostingPage} />
          <Route path="/actuallistpage" component={ActualListPage} />

          <Route path="/fictilistpage" component={FictiListPage} />
          <Route path="/fictipostingpage" component={FictiPostingPage} />
          <Route path="/fictiForm" component={FictiForm} />

          <Route path="/register" component={RegisterPage} />
          <Route path="/notepage" component={NotePage} />
          <Route path="/findpass" component={FindPassPage} />
          <Route path="/myinfo" component={MyinfoPage} />
          <Route path="/community" component={Community} />
          <Route path="/update" component={Update} />
          <Route
            render={({ location }) => (
              <div>
                <h2>이 페이지는 존재하지 않습니다: {location.pathname}</h2>
              </div>
            )}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
