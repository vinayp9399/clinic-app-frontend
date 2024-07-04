import { useNavigate } from 'react-router-dom'
import '../css/header.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Header = ()=>{
    const navigate = useNavigate();
    const email = localStorage.getItem('email');
    const usertype = localStorage.getItem('usertype');
    const id = localStorage.getItem('id');
    const firstname = localStorage.getItem('name');
    const [imageurl, setImageurl]= useState("https://clinic-app-backend.vercel.app/");
    const [image1, setImage1] = useState("");
    const [phoneno, setphoneno] = useState('');

    const profileImage =()=>{
        axios.get(`https://clinic-app-backend.vercel.app/users/singleuser/${id}`).then((response)=>{
          setImage1(response.data.message.image);
        })
      }

    const handleLogout = ()=>{
        localStorage.clear();
        navigate('/')
    }
    const logoutInfo = ()=>{
        document.getElementById("prof").style.display="block";
    }
    const logoutInfo1 = ()=>{
        document.getElementById("prof").style.display="none";
    }

    const getphoneno =(event)=>{
        setphoneno(event.target.value);
    }

    const search =()=>{
        localStorage.setItem('phoneno',phoneno);
        navigate('/search');
    }

    useEffect(()=>{
        profileImage();
    })

    return(
        <>
        <div id="header1" style={{backgroundColor:"rgb(14, 37, 86)"}}>
        <div id="nav1"><a onClick={()=>{navigate('/home')}}><img style={{height:"84px", width:"97px"}} src="../images/blue-plus-icon-12.png" alt=""/></a>
        <h1 style={{fontSize:"41px", color:"rgb(40 176 226)", marginLeft:"-38px"}}>Health Care</h1>

        { usertype==="doctor" && <>
        <div id="search" style={{width:"686px"}}><input value={phoneno} class="search_box" type="text" placeholder="Search patient ..." name="phoneno" onChange={getphoneno}/><i style={{position:"relative", bottom:"-1px", left:"-42px", color:"rgb(14, 37, 86)"}} class="fa fa-search fa-lg" onClick={search}></i></div>
        </>}
        { usertype==="patient" && <>
        <div id="search" style={{width:"686px"}}><input value={phoneno} class="search_box" type="text" placeholder="Search doctor ..." name="phoneno" onChange={getphoneno}/><i style={{position:"relative", bottom:"-1px", left:"-42px", color:"rgb(14, 37, 86)"}} class="fa fa-search fa-lg" onClick={search}></i></div>
        </>}
        { usertype==="doctor" &&<img style={{borderRadius:"100%"}} src={imageurl + image1} alt="" width='50' height='50'/>}
        { usertype==="patient" &&<img style={{borderRadius:"100%",visibility:"hidden"}} src={imageurl + image1} alt="" width='50' height='50'/>}
        <div id="nav1_1">
        {!email &&<a onClick={()=>{navigate('/')}} class="a1"><i style={{color:"rgb(40 176 226)", marginRight:"13px"}} class="fa fa-user fa-lg" aria-hidden="true"></i></a>}
        {email &&
        <><a onClick={()=>{logoutInfo()}} class="a1"><i style={{color:"rgb(40 176 226)", marginRight:"13px"}} class="fa fa-user fa-lg" aria-hidden="true"></i></a>
        <div onMouseLeave={()=>{logoutInfo1()}} id="prof" class="profile_drop"><div style={{width:"250px", height:"60px", backgroundColor:"rgb(8, 18, 39)"}}>
        { usertype==="doctor" && <><h2 style={{padding:"20px", color:"white", backgroundColor:"rgb(8, 18, 39)"}}><b>Dr. {firstname}</b></h2></>}
        { usertype==="patient" && <><h2 style={{padding:"20px", color:"white", backgroundColor:"rgb(8, 18, 39)"}}><b>Patient</b></h2></>}
        </div>
        <ul class="menu2"><li onClick={()=>{navigate('/doctorprofile')}}>Your Profile</li><li>About Us</li><li>New Features</li><li onClick={()=>{handleLogout()}}><a>Logout</a></li></ul>
        </div></>}
        </div></div>
    </div>

        </>
    )
}
export default Header