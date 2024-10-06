"use client"


import Fullprofile from "/Components/Fullprofile"
import React from "react"


const page = () => {
    return (
        <>
            <Fullprofile username={"Lucas Adams"} fullprofile={"/images/boy2.jpg"} profession={"UI/UX Designer"} 
            
            about={"As a UI/UX designer, I specialize in creating intuitive, user-centered interfaces that enhance digital experiences. With a strong focus on usability and aesthetics, I blend creativity with functionality to design seamless interactions. My goal is to deliver engaging designs that not only look great but also meet the needs of users."} 
            
            experience={"I have 2 years of experience as a UI/UX designer, working on web and mobile applications to create user-friendly interfaces. I focus on conducting user research and usability testing to inform my designs. Collaborating with cross-functional teams, I deliver solutions that enhance user satisfaction and drive engagement."}>
                
            
            </Fullprofile>  
        
        </>
    )
}

export default page;