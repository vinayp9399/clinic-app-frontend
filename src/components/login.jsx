import { useLocation, useNavigate } from 'react-router-dom';
import '../css/registration.css';
import '../css/login.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Login = ()=>{

    const location = useLocation();
    console.log(location);
    const [errormessage,seterrormessage] = useState('')
    const [phoneno,getphoneno] = useState('');
    const [password,getpassword] = useState('');
    const [IsLoading, setIsLoading] = useState(false);

    const phonenoHanadler = (event)=>{
        getphoneno(event.target.value)

    }
    const passwordHanadler = (event)=>{
        getpassword(event.target.value)

    }
    const navigate = useNavigate();

    let count = 0;
        
            
    const submitHandler= (event)=>{
        event.preventDefault();
        setIsLoading(true);
        //console.log(firstname+lastname+phoneno+email+password)

            const expression_mob_no = /^[0-9]{10}$/;
            if(phoneno=="" && password==""){
                setIsLoading(false);
                seterrormessage("Please enter your credentials")
            }
            else if(phoneno=="" && password!=""){
                setIsLoading(false);
                seterrormessage("Please enter phone no.")
            }
            else if(password=="" && phoneno!=""){
                setIsLoading(false);
                seterrormessage("Please enter password")
            }
            else if(String(phoneno).match(expression_mob_no)){
                let registrationData ={phoneno:phoneno,password:password}
            axios.post('https://clinic-app-backend.vercel.app/users/login',registrationData).then((response)=>{
                if(response.data.message == 'phoneno or password does not match'){
                    setIsLoading(false);
                    seterrormessage("phoneno or password is wrong")

                }else{
                    localStorage.setItem('email',response.data.message.email)
                    localStorage.setItem('name',response.data.message.name)
                    localStorage.setItem('id',response.data.message._id)
                    localStorage.setItem('usertype',response.data.message.usertype)
                    localStorage.setItem('image',response.data.message.image)

                    let usertype = localStorage.getItem("usertype");
                    if(usertype=="doctor"){
                   navigate('/doctordashboard')}
                   else if(usertype=="patient"){
                    navigate('/patientdashboard')}
                }
            })
            // document.getElementById("login_error").style.visibility="hidden";
            }else{ 
                setIsLoading(false);              
                document.getElementById("login_error").style.visibility="visible";
                document.getElementById("login_error").innerHTML="Invalid phoneno.";
            }
    }
    
    return(
        <>
<div class="container1">

<img class="loginimg" src="../images/loginpage.jpg" alt="" />

<table class="loginform1" border="0">
<tr>
        <td>
            <img style={{marginLeft:"85px", marginRight:"70px",marginTop:"10px"}} height="70px" src="../../images/blue-plus-icon-12.png" alt="" />
        </td>
    </tr>
    <tr>
        <td>
            <p class="header-text">Welcome Back!</p>
        </td>
    </tr>
<div class="form-body">
    <tr>
        <td>
            <p class="sub-text">Login with your details to continue</p>
        </td>
    </tr>
    <tr>
        <td class="label-td">
            <label for="useremail" class="form-label">Phone No : </label>
        </td>
    </tr>
    <tr>
        <td class="label-td">
            <input id="mob_no" type="Password" name="useremail" class="input-text" placeholder="Phone No." value={phoneno} onChange={phonenoHanadler} required/>
        </td>
    </tr>
    <tr>
        <td class="label-td">
            <label for="userpassword" class="form-label">Password: </label>
        </td>
    </tr>

    <tr>
        <td class="label-td">
            <input id="password" type="Password" name="userpassword" class="input-text" placeholder="Password" value={password} onChange={passwordHanadler} required/>
        </td>
    </tr>


    <tr>
        <td>
        {IsLoading==true &&
        <><div className="loader1" style={{display:"flex", justifyContent:"space-around"}}></div>
        </>}
        {IsLoading==false &&
        <p id="login_error" style={{textAlign:"center", color:"red"}}>{errormessage}</p>}
        </td>
    </tr>

    <tr>
        <td>
            <button onClick={submitHandler} style={{marginTop:"10px"}} class="login-btn1 btn-primary-soft btn">Login</button>
        </td>
    </tr>
</div>      
</table>

</div>
        </>
    )
}
export default Login