import React from 'react'

export default function Message() {
    return (
        <>

            <div style={{ }}>
                <ul style={{listStyle:"none",display:"flex",justifyContent:"space-between"}}>
                    <li style={{fontSize:"30px",marginLeft:"90px",fontWeight:"600"}}>Messages</li>
                    <ul style={{listStyle:"none",display:"flex",marginRight:"90px",marginTop:"10px"}}>
                        <li style={{ border: "0px solid gray",marginRight:"10px",height:"30px",width:"30px", fontSize: "20px", borderRadius: "50px", backgroundColor: "lightgray" }}><a href=""><i class="fa fa-solid fa-gear" style={{ color: "black", padding: "5px" }}></i></a></li>
                        <li style={{ border: "0px solid gray",height:"30px",width:"30px", fontSize: "20px", borderRadius: "50px", backgroundColor: "lightgray" }}><a href=""><i class="fa fa-solid fa-magnifying-glass" style={{ color: "black", padding: "5px" }}></i></a></li>

                    </ul>
                </ul>
          <p style={{display:"flex",justifyContent:"center",marginTop:"100px",alignItems:"center",fontSize:"30px"}}>No new messages...</p>
            </div>



        </>
    )
}
