import '../../css/dashboard.css';
import PatientChatbot from './PatientChatbot'

const PatientDash = () => {
    const firstname = localStorage.getItem('name');

    return (
        <>
            <div className="dash-body">
                <table border="0" width="100%" style={{ borderSpacing: "0", margin: "0", padding: "0" }}>

                    <tr>
                        <td colSpan="4">
                            <center>
                                <table className="filter-container doctor-header patient-header" style={{ border: "none", width: "95%", rowGap: "2px", marginTop: "20px", borderSpacing: "0" }}>
                                    <tr>
                                        <td rowSpan={2}>
                                            <h3>Welcome!</h3>
                                            <h1>{firstname}</h1>
                                            <p>Haven't any idea about doctors? no problem let's jump to
                                                <a className="non-style-link"><b> "All Doctors"</b></a> section or
                                                <a className="non-style-link"><b> "Sessions"</b>. </a>
                                                Track your past and future appointments history. Also find out the expected arrival time of your doctor or medical consultant.
                                            </p>

                                            <h3>Channel a Doctor Here</h3>
                                            <div style={{ display: "flex", gap: "10px", width: "410px", height: "49px" }}>
                                                <input type="search" name="search" className="input-text" placeholder="Search Doctor and We will Find The Session Available" list="doctors" style={{ width: "100%" }} />
                                                <input type="Submit" value="Search" className="login-btn btn-primary btn" style={{ paddingLeft: "25px", paddingRight: "25px", paddingTop: "10px", paddingBottom: "10px" }} />
                                            </div>
                                            <br />
                                        </td>

                                        <td style={{ width: "25%" }}>
                                            <div className="dashboard-items" style={{ padding: "20px", margin: "auto", width: "95%", display: "flex" }}>
                                                <div>
                                                    <div className="h1-dashboard">0</div><br />
                                                    <div className="h3-dashboard">All Doctors</div>
                                                </div>
                                                <div className="btn-icon-back dashboard-icons" style={{ backgroundImage: "url('../images/icons/doctors-hover.svg')" }}></div>
                                            </div>
                                        </td>

                                        <td style={{ width: "25%" }}>
                                            <div className="dashboard-items" style={{ padding: "20px", margin: "auto", width: "95%", display: "flex" }}>
                                                <div>
                                                    <div className="h1-dashboard">0</div><br />
                                                    <div className="h3-dashboard">All Followups</div>
                                                </div>
                                                <div className="btn-icon-back dashboard-icons" style={{ backgroundImage: "url('../images/icons/patients-hover.svg')" }}></div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ width: "25%" }}>
                                            <div className="dashboard-items" style={{ padding: "20px", margin: "auto", width: "95%", display: "flex" }}>
                                                <div>
                                                    <div className="h1-dashboard">0</div><br />
                                                    <div className="h3-dashboard">New Booking</div>
                                                </div>
                                                <div className="btn-icon-back dashboard-icons" style={{ marginLeft: "0px", backgroundImage: "url('../images/icons/book-hover.svg')" }}></div>
                                            </div>
                                        </td>

                                        <td style={{ width: "25%" }}>
                                            <div className="dashboard-items" style={{ padding: "20px", margin: "auto", width: "95%", display: "flex", paddingTop: "21px", paddingBottom: "21px" }}>
                                                <div>
                                                    <div className="h1-dashboard">0</div><br />
                                                    <div className="h3-dashboard">Today Sessions</div>
                                                </div>
                                                <div className="btn-icon-back dashboard-icons" style={{ backgroundImage: "url('../images/icons/session-iceblue.svg')" }}></div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </center>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="4">
                            <table border="0" width="100%">
                                <tr>
                                    <td width="50%">
                                        <p style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "40px" }} className="anime">Doctor Reviews</p>
                                        <center>
                                            <div className="abc scroll" style={{ height: "250px", padding: "0", margin: "0" }}>
                                                <table width="85%" className="sub-table scrolldown" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan="4">
                                                                <br /><br /><br /><br />
                                                                <center>
                                                                    <img src="../images/notfound.svg" width="25%" alt="not found" />
                                                                    <br />
                                                                    <p className="heading-main12" style={{ marginLeft: "45px", fontSize: "20px", color: "rgb(49, 49, 49)" }}>Nothing to show here!</p>
                                                                    <a className="non-style-link">
                                                                        <button className="login-btn btn-primary-soft btn" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "20px" }}>&nbsp; Channel a Doctor &nbsp;</button>
                                                                    </a>
                                                                </center>
                                                                <br /><br /><br /><br />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </center>
                                    </td>

                                    <td>
                                        <p style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "40px" }} className="anime">Your Upcoming Booking</p>
                                        <center>
                                            <div className="abc scroll" style={{ height: "250px", padding: "0", margin: "0" }}>
                                                <table width="85%" className="sub-table scrolldown" border="0">
                                                    <thead>
                                                        <tr>
                                                            <th className="table-headin">Appoint. Number</th>
                                                            <th className="table-headin">Session Title</th>
                                                            <th className="table-headin">Doctor</th>
                                                            <th className="table-headin">Scheduled Date & Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan="4">
                                                                <br /><br /><br /><br />
                                                                <center>
                                                                    <img src="../images/notfound.svg" width="25%" alt="not found" />
                                                                    <br />
                                                                    <p className="heading-main12" style={{ marginLeft: "45px", fontSize: "20px", color: "rgb(49, 49, 49)" }}>Nothing to show here!</p>
                                                                    <a className="non-style-link">
                                                                        <button className="login-btn btn-primary-soft btn" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "20px" }}>&nbsp; Channel a Doctor &nbsp;</button>
                                                                    </a>
                                                                </center>
                                                                <br /><br /><br /><br />
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
            <PatientChatbot/>
            </div>

       
        </>
    );
};

export default PatientDash;
