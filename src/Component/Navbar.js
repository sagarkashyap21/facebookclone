import React from 'react'
// import "./Linkpp.css"
import {Link} from "react-router-dom"



export default function Navbar() {
    return (
       <> 
        <header style={{boxSizing:"border-box"}}>
     <nav className="nav1" style={{display:"flex",justifyContent:"space-between"}} >
       <h1 style={{color:"blue",marginLeft:"50px",marginTop:"4px"}}>facebook</h1>
       <ul style={{listStyle:"none",display:"flex",marginRight:"100px",marginTop:"20px"}} >
         <li style={{border:"0px solid gray",fontSize:"20px",borderRadius:"50px",backgroundColor:"lightgray"}}><Link to=""><i class="fa fa-solid fa-magnifying-glass" style={{color:"black",padding:"5px"}}></i></Link></li>
         <li style={{border:"0px solid gray",fontSize:"20px",borderRadius:"50px",backgroundColor:"lightgray",marginLeft:"20px"}}><Link to=""><i class="fa fa-sharp fa-solid fa-bars" style={{color:"black",padding:"5px"}}></i></Link></li>
       </ul>
     </nav>

     <nav style={{}}>
       <ul style={{listStyle:"none",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
         <li  style={{fontSize:"20px"}}><Link to="/"><i style={{color:"gray"}} class="fa fa-solid fa-house"></i></Link></li>
         <li style={{fontSize:"20px"}}><Link to="/friends"><i style={{color:"gray"}} class="fa fa-solid fa-user-group"></i></Link></li>
         <li style={{fontSize:"20px"}}><Link to="/message"><i  style={{color:"gray"}}class="fa-solid fa-message"></i></Link></li>
         <li style={{fontSize:"20px"}}><Link to="/bell"><i style={{color:"gray"}} class="fa fa-solid fa-bell"></i></Link></li>
         {/* <li style={{fontSize:"20px"}}><Link to="/videos"><i style={{color:"gray"}} class="fa-solid fa-tv"></i></Link></li> */}
         <li style={{fontSize:"20px"}}><Link to="/shop"><i style={{color:"gray"}} class="fa fa-solid fa-shop"></i></Link></li>
       </ul>
     </nav>
       <hr />

   </header>
   
       </>
    )
}
