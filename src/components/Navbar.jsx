import React,{useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
function Navbar() {
    const handleLogout = ()=>{
        localStorage.removeItem('token')

    }
    let location = useLocation();
    useEffect(()=>{
        // console.log(location);
    },[location])
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" href="#">iNotebook</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === "/"?"active":null}`}  to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === "/about"?"active":null}`} to="/about">About</Link>
                    </li>
                   
                </ul>
           
    {!localStorage.getItem('token')  ?         <form className="d-flex  ">
                
                  
      <Link className="btn btn-primary  my-2 my-sm-0 mx-1 me-2" to="/login" role="button" type="submit">Login</Link>
                    <Link className="btn btn-primary  my-2 my-sm-0 mx-1" to="/signup"  role="button"  type="submit">SignUp</Link>
                </form>: <Link className="btn btn-primary  my-2 my-sm-0 mx-1 me-2" to="/login" onClick={handleLogout} role="button" type="submit">Log Out</Link>}
                </div>
                </div>
        </nav>

    )
}

export default Navbar