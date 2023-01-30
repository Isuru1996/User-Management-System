import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSinlgeUser, updateUser } from '../redux';

const EditUser = () => {
    const {user}=useSelector((state)=>state.data);
    const idFromParam=useParams();
    const id=idFromParam.userId
    console.log(id);
    //const id=3;
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
            dispatch(updateUser(state,id));
            setError("");
            navigate('/',{replace:true});
        }
    }

    useEffect(()=>{
        dispatch(getSinlgeUser(id));
    },[]);

    useEffect(()=>{
        if(user){
            setState({...user});
        }
    },[user])
  return (
    <div>
        <nav>
            <Link to='/'><Button  style={{ marginBottom:"10px",marginTop:"10px"} }variant="contained" color='secondary'>Go Back</Button></Link> 
        </nav>
        
      <h2>Edit User</h2>
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
      <Button  style={{ marginBottom:"10px"} }variant="contained" color='primary' onClick={handleSubmit}>Update</Button>
    </Box>
    </div>
  )
}

export default EditUser
