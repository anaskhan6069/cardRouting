"use client"


import Fullprofile from "/Components/fullprofile"
import React from "react"


const page = () => {
    return (
        <>
            <Fullprofile username={"Noah Brooks"} fullprofile={"/images/boy7.jpg"} profession={"UI/UX Designer"} 
            
            about={"I specialize in creating intuitive, user-friendly interfaces that enhance the digital experience. With a keen eye for design and a focus on user-centric solutions, I blend creativity with functionality to craft seamless designs. I stay updated with the latest design trends and tools, ensuring each project is both visually appealing and highly functional. My goal is to deliver designs that not only look good but provide an exceptional user experience."} 
            
            experience={"I have 4 years of experience as a UI/UX designer, working on diverse projects across web and mobile platforms. I focus on creating user-friendly interfaces through wireframes, prototypes, and design systems. Collaborating with cross-functional teams, I ensure that my designs align with both user needs and business goals."}>
                
            
            </Fullprofile>  
        
        </>
    )
}

export default page;