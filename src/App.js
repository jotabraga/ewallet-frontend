import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import LogIn from "./components/log-in/LogIn";
import SignUp from "./components/sign-up/SignUp";
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

        </UserContext.Provider>
      </Switch>
      
    </BrowserRouter>
  );
}
