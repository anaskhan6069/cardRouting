"use client"


import Fullprofile from "/Components/Fullprofile"
import React from "react"


const page = () => {
    return (
        <>
            <Fullprofile username={"James Rivers"} fullprofile={"/images/boy4.jpg"} profession={"Game Developer"} 
            
            about={"As a game developer, I specialize in designing immersive, engaging games with a focus on gameplay mechanics, performance, and user experience. Using cutting-edge tools and technologies, I bring creative concepts to life. My goal is to craft games that are both entertaining and technically sound."} 
            
            experience={"I have 2 years of experience as a game developer, creating interactive and dynamic games using engines like Unity and Unreal. I focus on optimizing gameplay, graphics, and performance. I collaborate with artists and designers to build engaging, player-centered experiences."}>
                
            
            </Fullprofile>  
         
        </>
    )
}

export default page;