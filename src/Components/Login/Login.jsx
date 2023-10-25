import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [un,setUn]=useState('');
const[pass,setPass]=useState('');
const[error,setError]=useState(false);
const navigate=useNavigate();

const readusername =(event) =>{
    setUn(event.target.value);
    
}

const readpassword =(event) =>{
    event.preventDefault();
    setPass(event.target.value);
}
const readalldata =(event) =>{
    event.preventDefault();
    if(un.trim ()==='' || pass.trim==='')
    {
setError(true);
return true;
    }
    else
{
    setError(false);
    navigate('/home')

}
}


    return (
        <div className='aa'>
            <h1>Sign-in</h1>
            <form className='aa'>
                username<input type="text" onChange={readusername}/><br/><br/>
                Password<input type="password"/><br/><br></br>
               
                <button className='aa' onClick={readalldata}>Login</button><br></br>
                {
                    error && 'Error Occurs'
                }

            </form>
        </div>
    )
}

export default Login
