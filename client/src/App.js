import { useState } from "react";
import "./App.css"
import Login from "./components/Account/Login";
import Home from "./components/Screens/Home";
import {Route, Routes,Navigate,Outlet} from "react-router-dom"
import SignUp from "./components/Account/SignUp"
import CreatePost from "./components/CreatePost";


const PrivateRoute=({isAuthenticated})=>{
  return isAuthenticated?
  <Outlet/>:<Navigate replace to="/login"></Navigate>
}

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false)
 
  return (
    <div >
      
       <Routes>
       
       <Route path="/login" element={ <Login setIsAuthenticated={setIsAuthenticated}/>}></Route>
       <Route path="/signup" element={<SignUp/>}></Route>
       <Route path="/" element={ <PrivateRoute isAuthenticated={isAuthenticated}/>}>
       <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated}/>}/>
       <Route path="/create" element={<CreatePost setIsAuthenticated={setIsAuthenticated}/>}/>
       </Route>
       
        

       </Routes>
      
    </div>
  );
}

export default App;
