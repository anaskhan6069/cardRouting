"use client"


import Fullprofile from "/Components/Fullprofile"
import React from "react"


const page = () => {
    return (
        <>
            <Fullprofile username={"Alex David"} fullprofile={"/images/boy1.jpg"} profession={"Graphics Designer"} 
            
            about={"I’m a creative expert in visual design, specializing in blending graphics, text, and images to communicate ideas and tell stories. With a strong understanding of color theory, typography, and layout, I craft designs that capture attention and engage audiences. My work spans both digital and print media, from branding and marketing materials to web and user interface design, always aiming to deliver clear and compelling visuals that make a lasting impact."} 
            
            experience={"I have 4 years of experience as a graphic designer at Creative Minds Studio, handling branding and digital marketing projects. Currently based in Karachi, I collaborate with clients to deliver impactful and creative design solutions."}>
                
            
            </Fullprofile>  
           
        </>
    )
}

export default page;