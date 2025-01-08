import { useState } from "react";
import "./App.css"
import Login from "./components/Account/Login";
import Home from "./components/Screens/Home";
import {Route, Routes,Navigate,Outlet} from "react-router-dom"
import SignUp from "./components/Account/SignUp"
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Screens/Navbar";
import Footer from "./components/Screens/Footer";


const PrivateRoute=({isAuthenticated})=>{
  return isAuthenticated?
  <Outlet/>:<Navigate replace to="/login"></Navigate>
}

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false)
 
  return (
    <div >
      
       <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
       <Routes>
       
       <Route path="/login" element={ <Login setIsAuthenticated={setIsAuthenticated}/>}></Route>
       <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/" element={ <PrivateRoute isAuthenticated={isAuthenticated}/>}>
       <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated}/>}/>
       <Route path="/create" element={<CreatePost setIsAuthenticated={setIsAuthenticated}/>}/>
       </Route>
       </Routes>
        <Footer/>
       
     
      
      
        

      
    </div>
  );
}

export default App;
