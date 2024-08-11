import { useState} from "react"

const Doctorheader=(props)=>{

    let date1 = new Date();
    let date = `${date1.getDate()}/${date1.getMonth()+1}/${date1.getFullYear()}`

    const [todayDate,settodayDate]=useState(date)

    return(
        <>
        <table border="0" width="100%" style={{borderSpacing: "0", margin:"0", padding:"0"}}>
        <tr >
                            <td colspan="1" class="nav-bar" >
                            <p style={{fontSize: "23px", paddingLeft:"12px", fontWeight:"600", marginLeft:"20px"}}>{props.nav}</p>
                          
                            </td>
                            <td className="" width="25%">
                               
                            </td>
                            {/* <td width="15%">
                                <p style={{fontSize: "14px",color: "rgb(119, 119, 119)",padding: "0",margin: "0",textAlign: "right"}}>
                                    Today's Date
                                </p>
                                <p class="heading-sub12" style={{padding: "0",margin: "0"}}>
                                {todayDate}
                                </p>
                            </td>
                            <td width="10%">
                                <button  class="btn-label"  style={{display: "flex", justifyContent:"center",alignItems: "center"}}><img src="../images/calendar.svg" width="100%"/></button>
                            </td> */}
        
        
                        </tr>
                        </table>
        </>
    )
}

export default Doctorheader