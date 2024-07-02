import { useLocation, useNavigate } from 'react-router-dom';
import '../css/registration.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Registration = ()=>{

    const location = useLocation();
    console.log(location);
    const [formname,getformname] = useState('Create Account')
    const [buttonname,getbuttonname] = useState('Sign In');
    const [phoneno,getphoneno] = useState('');
    const [email,getemail] = useState('');
    const [password,getpassword] = useState('');

    const phonenoHanadler = (event)=>{
        getphoneno(event.target.value)

    }
    const passwordHanadler = (event)=>{
        getpassword(event.target.value)

    }
    const emailHanadler = (event)=>{
        getemail(event.target.value)
    }
    const navigate = useNavigate();

    let count = 0;
        
            
    const submitHandler= (event)=>{
        event.preventDefault();
        //console.log(firstname+lastname+phoneno+email+password)

        if(location.pathname === '/'){
            let registrationData ={phoneno:phoneno,password:password}
            axios.post('http://localhost:8080/users/login',registrationData).then((response)=>{
                if(response.data.message == 'phoneno or password does not match'){
                    //getformerror('Email or password is wrong');
                    console.log('Email or password is wrong');
                    document.getElementById("login_error").innerHTML="phoneno or password is wrong";

                }else{
                    localStorage.setItem('email',response.data.message.email)
                    localStorage.setItem('name',response.data.message.name)
                    localStorage.setItem('id',response.data.message._id)
                    localStorage.setItem('usertype',response.data.message.usertype)
                   navigate('/home')
                }
                
    
            })

        }else if(location.pathname === '/registration'){
            const expression_email = /^[a-z A-Z _ 0-9]+@[a-z A-Z]+\.[a-z A-Z]{2,5}$/;
            const expression_mob_no = /^[0-9]{10}$/;
            if(String(email).match(expression_email)){
                document.getElementById("email_error").innerHTML= "";
            }else{
                document.getElementById("email_error").innerHTML= "Invalid email!";
                count = count + 1 ;
            }
            if(String(phoneno).match(expression_mob_no)){
                document.getElementById("mob_no").innerHTML= "";
            }else{
                document.getElementById("mob_no_error").innerHTML= "Invalid phone no.!";
                count = count + 1 ;
            }

            if(count==0){
            let newpassword= phoneno.slice(-3,);
            let registrationData ={phoneno:phoneno,email:email,password:newpassword,usertype:"patient"}
        axios.post('http://localhost:8080/users/registration',registrationData).then((response)=>{
                console.log(response);
                alert("Your password is the last 3 digits of your phone number.");
                navigate('/');

        })}}
    }

    useEffect(()=>{
        if(location.pathname === '/'){
            getformname('Log In')
            getbuttonname('Continue')
        }
    },[])
    
    return(
        <>
  <div id="header">
        <a><img style={{height:"97px", width:"113px"}} src="../images/blue-plus-icon-12.png" alt=""/></a>
        <h1 style={{fontSize:"41px", color:"rgb(14, 37, 86)"}}>Health Care</h1>
    </div>
    <div id="content">
            <form class="login1">
            <h1 style={{color:"rgb(14, 37, 86)"}}>{formname}</h1><br/>
            { buttonname === 'Sign In' &&
            <>
                <label><strong>Email Id:</strong></label><br/> 
                <input id="email" style={{height:"24px", width:"339px"}} type="email" name="email" value={email} onChange={emailHanadler} required/> <br/>
                <h4 style={{color:"red"}} id="email_error"></h4><br/>
                </>
            }
                <label><strong>Mobile No.:</strong></label><br/>
                <input id="mob_no" style={{height:"24px", width:"339px"}} type="tel" name="Phone_No." value={phoneno} onChange={phonenoHanadler} required/><br/>
                <h4 style={{color:"red"}} id="mob_no_error"></h4><br/>

                { buttonname === 'Continue' &&<>
                <label><strong>Password:</strong></label><br/> 
                <input id="password" style={{height:"24px", width:"339px"}} type="Password" name="password" value={password} onChange={passwordHanadler} required/><br/>
                <h4 style={{color:"red"}} id="password_error"></h4><br/></>
                }
                <input class="submit_button" type="submit" value={buttonname} onClick={submitHandler} name="submit"/>
                { buttonname === 'Sign In' &&<p style={{marginTop:"10px", textAlign:"center"}}>Already have an account? <a style={{color:"blue"}} onClick={()=>{navigate('/')}}>Log In</a></p>}
                { buttonname === 'Continue' &&<><p id="login_error" style={{marginTop:"10px", textAlign:"center", color:"red"}}></p><p style={{marginTop:"10px", textAlign:"center"}}>New to Health Care? <a style={{color:"blue"}} onClick={()=>{navigate('/registration')}}>Create Account</a></p></>}
            </form>
        </div>  


        </>
    )
}
export default Registration