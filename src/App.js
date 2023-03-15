import "./App.css";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AlertState from "./context/notes/AlertState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <AlertState>
          <Router>
            <Navbar />
            <Alert />
            <div className='container'>
              <Routes>
                <Route exact path='/' element={<Home />}>
                  {" "}
                </Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path='/login' element={<Login />}>
                  {" "}
                </Route>
                <Route exact path='/signup' element={<SignUp />}></Route>
              </Routes>
            </div>
          </Router>
        </AlertState>
      </NoteState>
    </>
  );
}

export default App;
