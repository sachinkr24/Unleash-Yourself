import { useState,useContext } from 'react';
import {Box, TextField, Button, styled, Typography } from '@mui/material';

import {API} from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';
const Error = styled('Typography')`

font-size : 10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`


//styling the while login/signup box
const Component = styled(Box)`
width: 400px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0 /0.6);
`


//styling LoginButton
const LoginButton =styled(Button)`
 text-transform : none;
 background: #FB641B;
 height:48px;
 border-radius: 2px;
`


//styling signupButton
const SignButton =styled(Button)`
 text-transform : none;

 height:48px;
 border-radius: 2px;
 box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);
`


//styling or button
const Text = styled(Typography)`
color: #878787;
font-size: 14px;
`


//here since we are styling html component it will be treated as an object and passed as string
const Image = styled('img')({
    width:100,
    margin:'auto',
    display:'flex',
    padding:'50px 0 0'
});


//this wrapper is box without image 
//adding margins between buttons, or text, and textfields
const Wrapper = styled(Box)`
padding:25px 35px;
display:flex;
flex : 1;
flex-direction : column;
&> div, &> button, &>p{
    margin-top :20px;
}
`
// const onInputChange = (e)=>{
//     console.log(e.target.name,e.target.value);

// }


//ye mera dummy object hai to store entered values in signup form


const signupInitialValues = {

    name:'',
    username: '',
    password: ''
}

const loginInitialValues = {

    username: '',
    password: ''
}

// everything inside login and then it will be exported
const Login = ({isUserAuthenticated}) =>{
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    // storing state in account
    //changing toggleAccount changes state value
    const[account, toggleAccount] = useState('login');
    const[signup, setSignup] = useState(signupInitialValues);
    const[error, setError] = useState('');
    const[login, setLogin] = useState(loginInitialValues);
    // 


    const{setAccount} = useContext(DataContext);
    const navigate = useNavigate();
    const toggleSignup = () =>{
        account === 'signup' ?toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange=(e) => {
        setSignup({...signup,[e.target.name]: e.target.value}); // to append ..signup , e.target.name is key , and e.target.vale that objects value
    }

    const signupUser = async ()=>{
         let response = await API.userSignup(signup);
         if(response.isSuccess){
            setError('');
            setSignup(signupInitialValues);
            toggleAccount('login')
         }else{
          setError('Something went wrong!')
         }
    }

    const onValueChange=(e) => {
        setLogin({...login,[e.target.name]: e.target.value}); // to append ..signup , e.target.name is key , and e.target.vale that objects value
    }

    const loginUser = async ()=>{
        let response = await API.userLogin(login);
        if(response.isSuccess){
           setError('');

           sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}` )
           sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}` )
        //    name 
        //    username

         setAccount({username: response.data.username, name: response.data.name})
         isUserAuthenticated(true);


         navigate('/');
        }else{
         setError('Something went wrong!')
        }
   }


        return(
            <Component>
              <Box>
                <Image src = {imageURL} alt = "login" />
                {
                    account==='login'?
                 <Wrapper>
                <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name = "username" label = "Enter username"/>
                <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name = "password"  label = "Enter Password"/>

                { error && <Error>{error}</Error> }
                <LoginButton variant="contained" onClick={()=>loginUser()}>Login</LoginButton>
                <Text style = {{textAlign:'center'}}>OR</Text>
                <SignButton onClick={()=>toggleSignup()}>Create an Account</SignButton>
                </Wrapper> 
            : 

            <Wrapper> 
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name = 'name' label = "Enter Name"/>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name = 'username' label = "Enter username"/>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name = 'password' label = "Enter Password"/>
                
                { error && <Error>{error}</Error> }
                <SignButton onClick={()=> signupUser()}>SignUp</SignButton>
                <Text style = {{textAlign:'center'}}>OR</Text>
                <LoginButton variant="contained" onClick={()=>toggleSignup()}>Already have an Account?</LoginButton>
                </Wrapper>
            }
              </Box>
            </Component>
        )
}

export default Login;