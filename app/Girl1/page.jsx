"use client"


import Fullprofile from "/Components/Fullprofile"
import React from "react"


const page = () => {
    return (
        <>
            <Fullprofile username={"Emma Collins"} fullprofile={"/images/girl1.jpg"} profession={"Software Engineer"}
            
            about={"Passionate about crafting efficient, scalable software solutions through clean, maintainable code. Skilled in optimizing performance and driving innovation. Focused on delivering high-quality software that solves real-world challenges. Committed to continuous improvement and best practices in development."} 
            
            experience={"I have 4 years of experience as a software engineer, specializing in full-stack development and problem-solving. Based in Karachi, I work closely with clients to deliver efficient and scalable software solutions. My focus is on clean code, performance optimization, and innovative technology integration."}>
                
            </Fullprofile>  
           
        </>
    )
}

export default page;