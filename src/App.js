import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import LogIn from "./components/log-in/LogIn";
import SignUp from "./components/sign-up/SignUp";
import MainPage from "./components/main-page/MainPage";
import NewIn from "./components/new-in/NewIn";
import NewOut from "./components/new-out/NewOut";
import UserContext from "./components/UserContext";
import { useState } from "react";

export default function App() {

  const initialUserState = localStorage.getItem("user")
                          ? JSON.parse(localStorage.getItem("user"))
                          : null;

  const [user, setUser] = useState(initialUserState);

  return (
    <BrowserRouter>
  
      <Switch>
        <UserContext.Provider value={{ user, setUser }}>

          <Route path="/" exact component={LogIn}></Route>
          <Route path="/sign-up" exact component={SignUp}></Route>
          <Route path="/main" exact component={MainPage}></Route>
          <Route path="/new-income" exact component={NewIn}></Route>
          <Route path="/new-expense" exact component={NewOut}></Route>

        </UserContext.Provider>
      </Switch>
      
    </BrowserRouter>
  );
}
