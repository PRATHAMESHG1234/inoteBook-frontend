import React,{ useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from "../context/notes/AlertContext"
function Login() {
  const context = useContext(AlertContext)
  const {showAlert} = context
    const [credentials, setCredentials] = useState({email:"",password:""})
    let navigate  =useNavigate();
  
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await  fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        });
        

        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
         const token=   localStorage.setItem('token', json.authToken); 
         showAlert("Logged In Succesfully","success")
         navigate("/");
        }
        else{
          showAlert("Invalied Details","danger")
        }
    
       
    }
    const handleChange= (event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
      }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" value={credentials.email} onChange={handleChange} id="email" name='email' aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" onChange={handleChange} value={credentials.password} name='password' id="password"/>

    </div>
    
    <button type="submit" className="btn btn-primary" >Submit</button>
  </form>
  </div>
  )
}

export default Login