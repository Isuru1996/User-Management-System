import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux';

const AddUser = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [state,setState]=useState({
        name:"",
        email:"",
        contact:"",
        address:"",
    });

    const [error,setError]=useState("");

    const {name,email,contact,address}=state;

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setState({...state,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !address|| !email ||!contact){
            setError("Please input all input field");
            //console.log(error);
        }else{
            dispatch(addUser(state));
            setError("");
            navigate('/',{replace:true});
        }
    }
  return (
    <div>
        <nav>
            <Link to='/'><Button  style={{ marginBottom:"10px",marginTop:"10px"} }variant="contained" color='secondary'>Go Back</Button></Link> 
        </nav>
        
      <h2>Add User</h2>
      {
        error && <h3 style={{ color:"red"}}>{error}</h3>
      }
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="UserName" variant="outlined" value={name} type="text" name="name" onChange={handleInputChange}/><br/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={email} type="email" name="email" onChange={handleInputChange}/><br/>
      <TextField id="outlined-basic" label="Contact" variant="outlined" value={contact} type="number" name="contact" onChange={handleInputChange}/><br/>
      <TextField id="outlined-basic" label="Address" variant="outlined" value={address} type="text" name="address" onChange={handleInputChange}/><br/>
      <Button  style={{ marginBottom:"10px"} }variant="contained" color='primary' onClick={handleSubmit}>Submit</Button>
    </Box>
    </div>
  )
}

export default AddUser
