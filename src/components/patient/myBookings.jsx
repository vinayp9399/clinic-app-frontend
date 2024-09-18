const Mybookings =()=>{
    return(
        <>
        <div class="dash-body">
            <table border="0" width="100%" style={{borderSpacing:"0", margin:"0", padding:"0", marginTop:"20px"}}>
                <tr>
                    
                    <td>
                        
                        <form action="" method="post" class="header-search">

                            <input type="search" name="search" class="input-text header-searchbar" placeholder="Search Doctor name or Email" list="doctors"/>&nbsp;&nbsp;
                            
                            
                            
                       
                            <button class="login-btn btn-primary btn" style={{paddingLeft:"25px",paddingRight:"25px",paddingTop:"10px",paddingBottom:"10px"}}>Search</button>
                        
                        </form>
                        
                    </td>
                </tr>
               
                
                <tr>
                    <td colspan="4" style={{paddingTop:"10px"}}>
                        <p class="heading-main12" style={{fontSize:"23px", paddingLeft:"12px", fontWeight:"600", marginLeft:"20px"}}>My bookings</p>
                    </td>
                    
                </tr></table></div>
        </>
    )
}

export default Mybookings