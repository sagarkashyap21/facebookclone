import React, { useState } from 'react'
import Homedata from "./Homedata"
export default function Bell() {
    const [data, setdata] = useState(Homedata)
    console.log(data)
    return (
        <>
            <div className="container" style={{}}>
                <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <li style={{ fontSize: "30px", fontWeight: "500" }}> Notifications</li>
                    <li style={{ border: "0px solid gray", fontSize: "20px", height: "30px", width: "30px", borderRadius: "50px", backgroundColor: "lightgray" }}><a href=""><i class="fa fa-solid fa-magnifying-glass" style={{ color: "black", padding: "5px" }}></i></a></li>

                </ul>


            </div>



            {data.map((val) => {
                return (
                    <div style={{}}>
                        <hr />
                        <ul style={{ listStyle: "none", display: "flex", marginLeft: "100px" }}>
                            <li ><a href=""><img style={{ height: "100px", width: "100px", borderRadius: "50px" }} src={val.imgsrc} alt="" /></a></li>
                            <li style={{ fontSize: "20px", marginLeft: "30px", fontWeight: "600" }}> {val.title}
                                <span style={{ fontWeight: "normal" }}> added a new photo</span>
                                <p style={{ fontWeight: "normal" }}>{val.time}</p>
                            </li>
                            <li style={{ position: "absolute", right: "120px", fontSize: "25px" }}><a href=""><i style={{ color: "gray" }} class="fa fa-solid fa-ellipsis-vertical"></i></a></li>
                        </ul>
                    </div>
                )

            })}

        </>
    )
}
