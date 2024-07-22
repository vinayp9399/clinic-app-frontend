import '../../css/dashboard.css';

const PatientDash=()=>{
    const firstname = localStorage.getItem('name');
    const date = new Date();
    return(
        <>
        <div class="dash-body">
            <table border="0" width="100%" style={{ borderSpacing:"0", margin:"0", padding:"0"}}>
                        
                        <tr>
                            
                            <td colspan="1" class="nav-bar">
                            <p style={{fontSize: "23px",paddingLeft:"12px",fontWeight: "600",marginLeft:"20px"}}>Home</p>
                          
                            </td>
                            <td width="25%">

                            </td>
                            <td width="15%">
                                <p style={{fontSize:"14px",color:"rgb(119, 119, 119)",padding: "0",margin: "0",textAlign:"right"}}>
                                    Today's Date
                                </p>
                                <p class="heading-sub12" style={{padding: "0", margin: "0"}}>
                                    {date.getDate()}/{date.getUTCMonth()+1}/{date.getFullYear()}
                                </p>
                            </td>
                            <td width="10%">
                                <button  class="btn-label"  style={{display: "flex", justifyContent:"center",alignItems:"center"}}><img src="../images/calendar.svg" width="100%"/></button>
                            </td>
        
        
                        </tr>
                <tr>
                    <td colspan="4">
                        
                    <center>
                    <table class="filter-container doctor-header patient-header" style={{border: "none",width:"95%", border:"0", rowGap:"2px"}}>
                    <tr>
                        <td rowSpan={2}>
                            <h3>Welcome!</h3>
                            <h1>{firstname}</h1>
                            <p>Haven't any idea about doctors? no problem let's jump to <br />
                                <a class="non-style-link"><b> "All Doctors"</b></a> section or 
                                <a class="non-style-link"><b> "Sessions"</b>. </a>
                                Track your past and future appointments history. Also find out the expected arrival time of your doctor or medical consultant.<br/><br/>
                            </p>
                            
                            <h3>Channel a Doctor Here</h3>
                                <div style={{display:"flex", gap:"10px", width: "410px",height: "49px"}}>
                                <input type="search" name="search" class="input-text " placeholder="Search Doctor and We will Find The Session Available" list="doctors" style={{width:"100%"}}/>
                           
                                <input type="Submit" value="Search" class="login-btn btn-primary btn" style={{paddingLeft:"25px",paddingRight:"25px",paddingTop: "10px",paddingBottom:"10px"}}/></div>
                            
                            <br/>
                            
                            
                        </td>
                        
                                                <td style={{width: "25%"}}>
                                                    <div  class="dashboard-items"  style={{padding:"20px",margin:"auto",width:"95%",display: "flex"}}>
                                                        <div>
                                                                <div class="h1-dashboard">
                                                                   0
                                                                </div><br/>
                                                                <div class="h3-dashboard">
                                                                    All Doctors &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                </div>
                                                        </div>
                                                                <div class="btn-icon-back dashboard-icons" style={{backgroundImage: "url('../images/icons/doctors-hover.svg')"}}></div>
                                                    </div>
                                                </td>
                                                <td style={{width:"25%"}}>
                                                    <div  class="dashboard-items"  style={{padding:"20px",margin:"auto",width:"95%",display:"flex"}}>
                                                        <div>
                                                                <div class="h1-dashboard">
                                                                    0
                                                                </div><br/>
                                                                <div class="h3-dashboard">
                                                                    All Followups &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                </div>
                                                        </div>
                                                                <div class="btn-icon-back dashboard-icons" style={{backgroundImage: "url('../images/icons/patients-hover.svg')"}}></div>
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td style={{width:"25%;"}}>
                                                    <div  class="dashboard-items"  style={{padding:"20px",margin:"auto",width:"95%",display:"flex"}}>
                                                        <div>
                                                                <div class="h1-dashboard" >
                                                                   0
                                                                </div><br/>
                                                                <div class="h3-dashboard" >
                                                                    New Booking &nbsp;&nbsp;
                                                                </div>
                                                        </div>
                                                                <div class="btn-icon-back dashboard-icons" style={{marginLeft:"0px",backgroundImage:"url('../images/icons/book-hover.svg')"}}></div>
                                                    </div>
                                                    
                                                </td>

                                                <td style={{width:"25%"}}>
                                                    <div  class="dashboard-items"  style={{padding:"20px",margin:"auto",width:"95%",display:"flex",paddingTop:"21px",paddingBottom:"21px"}}>
                                                        <div>
                                                                <div class="h1-dashboard">
                                                                    0
                                                                </div><br/>
                                                                <div class="h3-dashboard">
                                                                    Today Sessions
                                                                </div>
                                                        </div>
                                                                <div class="btn-icon-back dashboard-icons" style={{backgroundImage:"url('../images/icons/session-iceblue.svg')"}}></div>
                                                    </div>
                                                </td>
                                                
                                            </tr>
                    
                    </table>
                    </center>
                    
                </td>
                </tr>
                <tr>
                    <td colspan="4">
                        <table border="0" width="100%">
                            <tr>
                                <td width="50%">

                                <p style={{fontSize:"20px",fontWeight:"600",paddingLeft:"40px"}} class="anime">Doctor Reviews</p>
                                    <center>
                                        <div class="abc scroll" style={{height:"250px",padding:"0",margin:"0"}}>
                                        <table width="85%" class="sub-table scrolldown" border="0" >
                                        
                                        <tbody>
                                        
                                        <tr>
                                                    <td colspan="4">
                                                    <br/><br/><br/><br/>
                                                    <center>
                                                    <img src="../images/notfound.svg" width="25%"/>
                                                    
                                                    <br/>
                                                    <p class="heading-main12" style={{marginLeft:"45px",fontSize:"20px",color:"rgb(49, 49, 49)"}}>Nothing to show here!</p>
                                                    <a class="non-style-link"><button  class="login-btn btn-primary-soft btn"  style={{display: "flex",justifyContent:"center",alignItems:"center",marginLeft:"20px"}}>&nbsp; Channel a Doctor &nbsp;</button>
                                                    </a>
                                                    </center>
                                                    <br/><br/><br/><br/>
                                                    </td>
                                                    </tr>
                                                    
                                                <tr>
                                                        <td style={{padding:"30px",fontSize:"25px",fontWeight:"700"}}> &nbsp;</td>
                                                        <td style={{padding:"20px"}}> &nbsp;</td>
                                                        <td>
                                                        
                                                        </td>
                                                        <td style={{textAlign:"center"}}>
                                                           
                                                        </td>

                
                                                       
                                                    </tr>
                 
                                            </tbody>
                
                                        </table>
                                        </div>
                                        </center>








                                </td>
                                <td>


                            
                                    <p style={{fontSize:"20px",fontWeight:"600",paddingLeft:"40px"}} class="anime">Your Upcoming Booking</p>
                                    <center>
                                        <div class="abc scroll" style={{height:"250px",padding:"0",margin:"0"}}>
                                        <table width="85%" class="sub-table scrolldown" border="0" >
                                        <thead>
                                            
                                        <tr>
                                        <th class="table-headin">
                                                    
                                                
                                                    Appoint. Number
                                                    
                                                    </th>
                                                <th class="table-headin">
                                                    
                                                
                                                Session Title
                                                
                                                </th>
                                                
                                                <th class="table-headin">
                                                    Doctor
                                                </th>
                                                <th class="table-headin">
                                                    
                                                    Sheduled Date & Time
                                                    
                                                </th>
                                                    
                                                </tr>
                                        </thead>
                                        <tbody>
                                        
                                        <tr>
                                                    <td colspan="4">
                                                    <br/><br/><br/><br/>
                                                    <center>
                                                    <img src="../images/notfound.svg" width="25%"/>
                                                    
                                                    <br/>
                                                    <p class="heading-main12" style={{marginLeft:"45px",fontSize:"20px",color:"rgb(49, 49, 49)"}}>Nothing to show here!</p>
                                                    <a class="non-style-link"><button  class="login-btn btn-primary-soft btn"  style={{display: "flex",justifyContent:"center",alignItems:"center",marginLeft:"20px"}}>&nbsp; Channel a Doctor &nbsp;</button>
                                                    </a>
                                                    </center>
                                                    <br/><br/><br/><br/>
                                                    </td>
                                                    </tr>
                                                    
                                                <tr>
                                                        <td style={{padding:"30px",fontSize:"25px",fontWeight:"700"}}> &nbsp;</td>
                                                        <td style={{padding:"20px"}}> &nbsp;</td>
                                                        <td>
                                                        
                                                        </td>
                                                        <td style={{textAlign:"center"}}>
                                                           
                                                        </td>

                
                                                       
                                                    </tr>
                 
                                            </tbody>
                
                                        </table>
                                        </div>
                                        </center>







                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default PatientDash