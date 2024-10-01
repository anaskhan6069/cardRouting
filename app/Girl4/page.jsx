"use client"


import Fullprofile from "/Components/fullprofile"
import React from "react"


const page = () => {
    return (
        <>
            <Fullprofile username={"Ella Scott"} fullprofile={"/images/girl6.jpg"} profession={"Game Developer"}
            
            about={"As a game developer, I specialize in creating captivating, interactive experiences across various platforms. I leverage cutting-edge game engines and technologies to design engaging gameplay mechanics and immersive environments. My goal is to deliver high-quality games that entertain and resonate with players."} 
            
            experience={"I have 1 and a half years of experience as a game developer, working with engines like Unity and Unreal Engine to create dynamic, engaging games. I focus on optimizing performance and enhancing user experience through innovative design. Collaborating with artists and designers, I develop games that deliver captivating narratives and gameplay."}>
                
            </Fullprofile>  
            
        </>
    )
}

export default page;