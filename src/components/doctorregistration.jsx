import { useLocation, useNavigate } from 'react-router-dom';
import '../css/registration.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Doctorregistration = ()=>{

            
    const location = useLocation();
    console.log(location);
    const [firstname,getfirstname] = useState('');
    const [phoneno,getphoneno] = useState('');
    const [email,getemail] = useState('');
    const firstnameHanadler = (event)=>{
        getfirstname(event.target.value)
    }
    const phonenoHanadler = (event)=>{
        getphoneno(event.target.value)
    }
    const emailHanadler = (event)=>{
        getemail(event.target.value)
    }
    const navigate = useNavigate();

    let count = 0;
        
            
    const submitHandler= (event)=>{
        event.preventDefault();
            const expression_fname = /^[a-z A-Z]{2,15}$/;
            const expression_email = /^[a-z A-Z _ 0-9]+@[a-z A-Z]+\.[a-z A-Z]{2,5}$/;
            const expression_mob_no = /^[0-9]{10}$/;
            if(String(firstname).match(expression_fname)){
                document.getElementById("name_error").innerHTML= "";
            }else{
                document.getElementById("name_error").innerHTML= "Invalid name!";
                count = count + 1 ;
            }
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
            let registrationData ={name:firstname,phoneno:phoneno,email:email,password:newpassword,usertype:"doctor"}
        axios.post('https://clinic-app-backend.vercel.app/users/registration',registrationData).then((response)=>{
                console.log(response);
                alert("Your password is the last 3 digits of your phone number.");
                navigate('/');

        })}
    }
    
    return(
        <>
  <div id="header">
        <a onClick={()=>{navigate('/home')}}><img style={{height:"97px", width:"113px"}} src="../images/blue-plus-icon-12.png" alt=""/></a>
        <h1 style={{fontSize:"41px", color:"rgb(14, 37, 86)"}}>Health Care</h1>
    </div>
    <div id="content">
            <form class="login1">
            <h1 style={{color:"rgb(14, 37, 86)"}}>Doctor Registration</h1><br/>
                <label><strong>Name:</strong></label><br/> 
                <input id="fname" style={{height:"24px", width:"339px"}} type="text" name="firstname" value={firstname} onChange={firstnameHanadler} required/><br/>
                <h4 style={{color:"red"}} id="name_error"></h4><br/> 
                <label><strong>Email Id:</strong></label><br/> 
                <input id="email" style={{height:"24px", width:"339px"}} type="email" name="email" value={email} onChange={emailHanadler} required/> <br/>
                <h4 style={{color:"red"}} id="email_error"></h4><br/>
                <label><strong>Mobile No.:</strong></label><br/>
                <input id="mob_no" style={{height:"24px", width:"339px"}} type="tel" name="Phone_No." value={phoneno} onChange={phonenoHanadler} required/><br/>
                <h4 style={{color:"red"}} id="mob_no_error"></h4><br/>
                <input class="submit_button" type="submit" value="Sign In" onClick={submitHandler} name="submit"/>
            </form>
        </div>  


        </>
    )
}
export default Doctorregistration