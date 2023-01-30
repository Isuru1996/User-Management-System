import axios from "axios";
import { ADD_USER, DELETE_USER, GET_SINGLE_USER, GET_USERS, UPDATE_USER } from "./userActionTypes";

const getUsers=(users)=>({
    type:GET_USERS,
    payload:users
});

const userDeleted=()=>({
    type:DELETE_USER
})

const userAdded=()=>({
    type:ADD_USER
})

const getUser=(user)=>({
    type:GET_SINGLE_USER,
    payload:user
})

const userUpdated=()=>({
    type:UPDATE_USER,
})

export const loadUsers=()=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`)
        .then((res)=>{
            console.log("response ",res);
            dispatch(getUsers(res.data));
        })
        .catch((err)=>{console.log(err)});
    };
};

export const deleteUser=(id)=>{
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((res)=>{
            console.log("response ",res);
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
        .catch((err)=>{console.log(err)});
    };
};

export const addUser=(user)=>{
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`,user)
        .then((res)=>{
            console.log("response ",res);
            dispatch(userAdded());
        })
        .catch((err)=>{console.log(err)});
    };
};

export const getSinlgeUser=(id)=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then((res)=>{
            console.log("response ",res);
            dispatch(getUser(res.data));
        })
        .catch((err)=>{console.log(err)});
    };
};

export const updateUser=(user,id)=>{
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user)
        .then((res)=>{
            console.log("response ",res);
            dispatch(userUpdated());
        })
        .catch((err)=>{console.log(err)});
    };
};