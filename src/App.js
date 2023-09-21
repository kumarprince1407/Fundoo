import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrimarySearchAppBar from "./components/Search";
import MiniDrawer from "./components/Drawer";
import MiniDrawer2 from "./components/Drawer2";
import Dashboard from "./components/Dashboard";
import Router from "./router/Router";

function App() {
  return (
    <Router />
    // <div className="App">
    //   {/* <Login />
    //   <Signup /> */}
    //   {/* <PrimarySearchAppBar /> */}
    //   {/* <Drawer /> */}
    //   {/* <MiniDrawer2 /> */}
    //   {/* <Dashboard /> */}
    // </div>
  );
}

export default App;
