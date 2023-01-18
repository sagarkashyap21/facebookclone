import React from 'react'
// import "./App.css"


export default function Navbar() {
    return (
       <> 
        <header style={{boxSizing:"border-box"}}>
     <nav className="nav1" style={{display:"flex",justifyContent:"space-between"}} >
       <h1 style={{color:"blue",marginLeft:"50px",marginTop:"4px"}}>facebook</h1>
       <ul style={{listStyle:"none",display:"flex",marginRight:"100px",marginTop:"20px"}} >
         <li style={{border:"0px solid gray",fontSize:"20px",borderRadius:"50px",backgroundColor:"lightgray"}}><a href=""><i class="fa fa-solid fa-magnifying-glass" style={{color:"black",padding:"5px"}}></i></a></li>
         <li style={{border:"0px solid gray",fontSize:"20px",borderRadius:"50px",backgroundColor:"lightgray",marginLeft:"20px"}}><a href=""><i class="fa fa-sharp fa-solid fa-bars" style={{color:"black",padding:"5px"}}></i></a></li>
       </ul>
     </nav>

     <nav style={{}}>
       <ul style={{listStyle:"none",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
         <li  style={{fontSize:"20px"}}><a href="/"><i style={{color:"gray"}} class="fa fa-solid fa-house"></i></a></li>
         <li style={{fontSize:"20px"}}><a href="/friends"><i style={{color:"gray"}} class="fa fa-solid fa-user-group"></i></a></li>
         <li style={{fontSize:"20px"}}><a href="/message"><i  style={{color:"gray"}}class="fa-solid fa-message"></i></a></li>
         <li style={{fontSize:"20px"}}><a href="/bell"><i style={{color:"gray"}} class="fa fa-solid fa-bell"></i></a></li>
         {/* <li style={{fontSize:"20px"}}><a href="/videos"><i style={{color:"gray"}} class="fa-solid fa-tv"></i></a></li> */}
         <li style={{fontSize:"20px"}}><a href="/shop"><i style={{color:"gray"}} class="fa fa-solid fa-shop"></i></a></li>
       </ul>
     </nav>
       <hr />

   </header>
   
       </>
    )
}
