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
    const [IsLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);

        if(location.pathname === '/'){
            const expression_mob_no = /^[0-9]{10}$/;
            if(String(phoneno).match(expression_mob_no)){
                setIsLoading(true);
                let registrationData ={phoneno:phoneno,password:password}
            axios.post('https://clinic-app-backend.vercel.app/users/login',registrationData).then((response)=>{
                if(response.data.message == 'phoneno or password does not match'){
                    //getformerror('Email or password is wrong');
                    console.log('Email or password is wrong');
                    document.getElementById("login_error").style.visibility="visible";
                    document.getElementById("login_error").innerHTML="phoneno or password is wrong";

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
        axios.post('https://clinic-app-backend.vercel.app/users/registration',registrationData).then((response)=>{
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
        <center>
<div class="container1">
<table border="0" style={{paddingLeft:"50px",width:"100%"}}>
<tr>
        <td>
            <img style={{marginLeft:"70px", marginRight:"70px",marginTop:"10px"}} height="70px" src="../../images/blue-plus-icon-12.png" alt="" />
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
            <input id="mob_no" type="email" name="useremail" class="input-text" placeholder="Phone No." value={phoneno} onChange={phonenoHanadler} required/>
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
        <div className="loader1" style={{display:"flex", justifyContent:"space-around"}}></div>}
        {IsLoading==false &&
        <p id="login_error" style={{visibility:"hidden", textAlign:"center", color:"red"}}>xyz</p>}
        </td>
    </tr>

    <tr>
        <td>
            <button onClick={submitHandler} class="login-btn1 btn-primary-soft btn">Login</button>
        </td>
    </tr>
</div>      
</table>

<div><img width="500px" src="../../images/pngtree-online-doctor-health-service-png-image_13230792.png" alt="" /></div>

</div>
</center>
        </>
    )
}
export default Registration