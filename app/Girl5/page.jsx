"use client"


import Fullprofile from "/Components/Fullprofile"
import React from "react"


const page = () => {
    return (
        <>
            <Fullprofile username={"Mia Brooks"} fullprofile={"/images/girl8.jpg"} profession={"Cybersecurity Specialist"}
            
            about={"As a cybersecurity specialist, I focus on protecting systems, networks, and data from cyber threats and vulnerabilities. With expertise in risk assessment, threat detection, and incident response, I implement robust security measures to safeguard sensitive information. My goal is to create a secure digital environment that enables safe business operations."} 
            
            experience={"I have 4 years of experience as a cybersecurity specialist, managing security protocols and incident response for various organizations. I focus on conducting security assessments and implementing best practices to mitigate risks. Collaborating with IT teams, I ensure the integrity and confidentiality of critical data."}>
                
            </Fullprofile>  
           
        </>
    )
}

export default page;