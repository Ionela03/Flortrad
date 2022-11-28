import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from "axios"
const Login = () => {
    const [inputs, setInputs]=useState({
        username:"",
        password:""
    })
    const[err,setError]=useState(null)

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))

    }

    const navigate = useNavigate();
    const handleSubmit = async e=>{
        e.preventDefault()
        try{
        await axios.post("/auth/login", inputs)
        navigate("/")

        }catch(err){
           setError(err.response.data)
        }
    }
    return(
        <div className='auth'>
            <h1>Login</h1>
            <form >
                <input types="text" placeholder='username' name="username" onChange={handleChange}/>
                <input type="password" placeholder='password' name="password" onChange={handleChange} />
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Don't have any account? <Link to=
                "/register">Register</Link> </span>
            </form>
            
        </div>
    )
}

export default Login