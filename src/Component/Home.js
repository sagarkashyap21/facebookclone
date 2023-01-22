import React,{useState} from 'react'
import Homedata from "./Homedata"
import {Link} from "react-router-dom"


export default function Home() {
    const [data, setdata] = useState(Homedata)
    // console.log(data)
    return (
        <>
{data.map((val)=>{
    return (
 <div style={{ }}>
 <hr style={{ border: "2px solid gray" }} />
 <div style={{ display: "flex", alignItems: "center" }}>

     <img style={{ height: "80px",marginLeft:"100px", width: "80px", borderRadius: "40px" }} src={val.imgsrc} alt="" />
     <ul style={{ listStyle: "none" }}>
         <li>{val.title}</li>
         <li>{val.duration} <i class="fa fa-solid fa-earth-americas"></i></li>
     </ul>
     <ul style={{ listStyle: "none", display: "flex", position: "absolute", right: "90px" }}>
         <li style={{ fontSize: "20px" }}><Link to=""><i style={{ color: "gray" }} class="fa fa-solid fa-ellipsis"></i></Link></li>
         <li style={{ marginLeft: "20px", fontSize: "20px" }}><Link to=""><i style={{ color: "gray" }} class="fa fa-solid fa-xmark"></i></Link></li>
     </ul>
 </div>

 <div style={{ display: "flex", justifyContent: "center" }}>
     <img style={{}} src={val.imgsrc} alt="" />
 </div>
 {/* <hr /> */}
 <div style={{}}>
     <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", margin: "10px" }}>
         <li style={{ border: "0px solid gray", color: "gray", marginLeft: "100px", backgroundColor: "lightgray", textAlign: "center", width: "120px", borderRadius: "40px", fontSize: "30px" }}><Link to=""><i style={{ color: "gray", marginTop: "12px" }} class="fa fa-solid fa-thumbs-up"></i></Link>{val.likes}</li>
         <li style={{ border: "0px solid gray", color: "gray", backgroundColor: "lightgray", textAlign: "center", width: "120px", borderRadius: "40px", fontSize: "30px" }}><Link to=""><i style={{ color: "gray", marginTop: "14px" }} class="fa fa-light fa-message"></i></Link>{val.comment}</li>
         <li style={{ border: "0px solid gray", color: "gray", marginRight: "100px", backgroundColor: "lightgray", textAlign: "center", width: "120px", borderRadius: "30px", fontSize: "40px" }}><Link to=""><i style={{ color: "gray", marginTop: "12px" }} class="fa fa-solid fa-share"></i></Link>{val.share}</li>
     </ul>
 </div>

</div>
)
})}

           
        </>
    )
}
