import Search from "./components/search";
import Details from "./components/details";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from './components/login'
import SignUp from "./components/register";
import Profile from "./components/profile";
import Logout from "./components/logout";
import InvalidProfile from "./components/invalidProfile";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
      <ChakraProvider>
            <div className="container-fluid">
                <BrowserRouter>
                    <Route
                        exact={true}
                        path={["/"]}>
                        <Home/>
                    </Route>
                    <Route
                        exact={true}
                        path={["/login"]}>
                        <Login/>
                    </Route>
                    <Route
                        exact={true}
                        path={["/logout"]}>
                        <Logout/>
                    </Route>
                    <Route
                        exact={true}
                        path={["/profile"]}>
                        <Profile/>
                    </Route>
                    {/*<Route*/}
                    {/*    exact={true}*/}
                    {/*    path={["/profile/:userId"]}>*/}
                    {/*    <Profile/>*/}
                    {/*</Route>*/}
                    {/*<Route*/}
                    {/*    exact={true}*/}
                    {/*    path={["/profile"]}>*/}
                    {/*    <InvalidProfile/>*/}
                    {/*</Route>*/}
                    <Route
                        exact={true}
                        path={["/register"]}>
                        <SignUp/>
                    </Route>
                    <Route
                        exact={true}
                        path={["/search", "/search/:title"]}>
                        <Search/>
                    </Route>
                    <Route
                        exact={true}
                        path={["/details/:dogId"]}>
                        <Details/>
                    </Route>
                </BrowserRouter>
            </div>
      </ChakraProvider>
  );
}

export default App;
