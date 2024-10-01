"use client"


import Fullprofile from "/Components/fullprofile"
import React from "react"


const page = () => {
    return (
        <>
            <Fullprofile username={"Aiden Parker"} fullprofile={"/images/boy3.jpg"} profession={"Mobile App Developer"} 
            
            about={"As a mobile app developer, I specialize in building user-friendly, high-performance apps for both Android and iOS platforms. I focus on delivering seamless, intuitive experiences with efficient, scalable code. My goal is to create mobile solutions that are both visually appealing and functionally robust."} 
            
            experience={"I have 3 years of experience in mobile app development, creating apps for both Android and iOS using technologies like React Native and Flutter. I focus on optimizing performance and ensuring smooth user experiences. I work closely with clients and teams to deliver feature-rich, scalable mobile applications."}>
                
            
            </Fullprofile>  
         
        </>
    )
}

export default page;