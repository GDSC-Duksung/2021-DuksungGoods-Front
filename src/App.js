import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/mainPage";
import ActDetailPage from "./pages/actDetailPage";
import FictiDetailPage from "./pages/fictiDetailPage";
import NavBar from "./components/Navbar";
import Top from "./components/top";
import MyPage from "./pages/MyPage";
import NotePage from "./pages/notePage";
import WatchListPage from "./pages/watchlistPage";
import WholePage from "./pages/wholePage";
import FictiPage from "./pages/fictiPage";
import ActualPage from "./pages/actualPage";
import Preposting from "./pages/preposting";
import Realposting from "./pages/realposting";
import Preform from "./pages/preform";
import Realform from "./pages/realform";
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
          <Route path="/ficti" component={FictiPage} />
          <Route path="/actual" component={ActualPage} />
          <Route path="/preposting" component={Preposting} />
          <Route path="/realposting" component={Realposting} />
          <Route path="/preform" component={Preform} />
          <Route path="/realform" component={Realform} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/notepage" component={NotePage} />
          <Route path="/findpass" component={FindPassPage} />
          <Route path="/myinfo" component={MyinfoPage} />
          <Route path="/community" component={Community} />
          <Route path="/update" component={Update} />
          <Route path="/actdetail" component={ActDetailPage} />
          <Route path="/fictidetail" component={FictiDetailPage} />
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
