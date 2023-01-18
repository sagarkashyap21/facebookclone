import React from 'react'

export default function Friends() {
    return (
        <>

            <div className="container" style={{}}>
                <ul style={{listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                    <li style={{ fontSize: "30px", fontWeight: "500" }}>Friends</li>
                    <li style={{ border: "0px solid gray", fontSize: "20px", borderRadius: "50px", backgroundColor: "lightgray", width: "30px", height: "30px", marginTop: "8px" }}><a href=""><i class="fa fa-solid fa-magnifying-glass" style={{ color: "black", padding: "5px" }}></i></a></li>

                </ul>
                <ul style={{ display: "flex", listStyle: "none" }}>
                    <li style={{ marginRight: "30px" }}><button style={{ borderRadius: "30px", backgroundColor: "gray" }} type="button" class="btn btn-secondary">Suggestions</button></li>
                    <li style={{}}><button style={{ borderRadius: "30px", backgroundColor: "gray" }} type="button" class="btn btn-secondary">Your Friends</button></li>
                </ul>
          
          <div style={{fontSize:"100px",marginLeft:"150px",marginTop:"100px"}}>No more request...</div>
            </div>

        </>
    )
}
