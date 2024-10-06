"use client"


import Fullprofile from "/Components/Fullprofile"
import React from "react"


const page = () => {
    return (
        <>
            <Fullprofile username={"Olivia Parker"} fullprofile={"/images/girl2.jpg"} profession={"Web Developer"}
            
            about={"As a web developer, I create responsive, high-performance websites using modern technologies like HTML, CSS, JavaScript, and React. I focus on delivering seamless user experiences with clean, efficient code. My goal is to build scalable, secure, and optimized web solutions."} 
            
            experience={"I have 2 years of experience in web development, specializing in front-end technologies and frameworks like React. I build responsive, dynamic websites with a focus on performance and user experience. I collaborate with teams to deliver scalable and feature-rich solutions."}>
                
            </Fullprofile>  
            
        </>
    )
}

export default page;