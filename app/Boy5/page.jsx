"use client"


import Fullprofile from "/Components/Fullprofile"
import React from "react"


const page = () => {
    return (
        <>
            <Fullprofile username={"Henry Ford"} fullprofile={"/images/boy6.jpg"} profession={"Digital Marketer"} 
            
            about={"As a digital marketer, I specialize in creating data-driven strategies to enhance brand visibility and drive engagement. With expertise in SEO, social media, and paid advertising, I help businesses reach their target audience effectively. My goal is to deliver measurable results through creative and strategic digital campaigns."} 
            
            experience={"I have 1 years of experience as a digital marketer, managing SEO, PPC, and social media campaigns. I focus on optimizing online presence and driving conversions. I collaborate with clients to create targeted, result-oriented digital marketing strategies."}>
                
            
            </Fullprofile>  
        
        </>
    )
}

export default page;