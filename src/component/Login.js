import React, { useState } from 'react';
import { SERVER_URL } from '../constants';
import { Button, Stack, TextField } from '@mui/material';

function Login({loginAuth}) {
    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    //로그인 요청 POST http://localhost:8010/login
    const login = () => {
        fetch(`${SERVER_URL}login`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(user)
        })
        .then(response => {
            //서버가보내준 뭐시기 토큰 담김
            const jwtToken = response.headers.get("Authorization");
            if(jwtToken!==null){
                sessionStorage.setItem("jwt",jwtToken);
                loginAuth();
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <Stack spacing={2} alignItems="center" mt={20}>
                <TextField name='username' label='username' onChange={handleChange} />
                <TextField name='password' label='password' onChange={handleChange} />
                <Button onClick={login}>login</Button> <Button>reset</Button>
            </Stack>
        </div>
    );
}

export default Login;