"use client"


import Fullprofile from "/Components/fullprofile"
import React from "react"


const page = () => {
    return (
        <>
            <Fullprofile username={"Amelia Hayes"} fullprofile={"/images/girl3.jpg"} profession={"Software Engineer"}
            
            about={"As a software engineer, I specialize in designing and developing efficient, scalable software solutions. With expertise in both front-end and back-end technologies, I focus on clean code, performance optimization, and innovative problem-solving. My goal is to build reliable, high-quality software that meets both user needs and business objectives."} 
            
            experience={"I have 2 years of experience as a software engineer, working on full-stack development projects across various industries. I focus on creating scalable applications with an emphasis on performance and security. I collaborate with cross-functional teams to deliver robust, efficient software solutions."}>
                
            </Fullprofile>  
           
        </>
    )
}

export default page;