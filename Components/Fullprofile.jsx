"use client"


import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faA, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn, faFacebookF, faTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faStar, faStarHalfStroke, faAt, faLocationArrow, faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons"
import Link from "next/link"


// import Link from "next/link"


const Fullprofile = (props) => {
    let [connectBtn, setConnectBtn] = useState("Connect with me");
    let [isConnect, setIsConnect] = useState(false);
    
    function connected() {
        if (isConnect){
            return;
        }

        let connectIcon = document.querySelector(".connect-icon");
        let connectIconWrapper = document.querySelector(".connect-icon-wrapper");
        let connectIconCopy = document.querySelector(".connect-icon--copy");


        setTimeout(() => {
            setConnectBtn("Connected");
            connectIcon.style.color = "white";
            connectIconWrapper.style.background = "black";
            setIsConnect(true);
        }, 2000);
        setConnectBtn("Connecting...");
        setIsConnect(false);

    }
    return (
        <>
            <div className="boy1-profile-container">
                <div className="col1">
                    <div className="full-image">
                        <img src={props.fullprofile} alt="Full profile" />
                    </div>
                    <div className="full-info">
                        <h1>{props.username} <FontAwesomeIcon icon={faAt} className="at-icon" />
                            <div className="wrapper">imanask4@gmail.com</div>
                        </h1>

                        <p><FontAwesomeIcon icon={faUserTie} className="icon" />{props.profession}</p>
                        <ul>
                            <li><FontAwesomeIcon icon={faStar} className="star-icon" /></li>
                            <li><FontAwesomeIcon icon={faStar} className="star-icon" /></li>
                            <li><FontAwesomeIcon icon={faStar} className="star-icon" /></li>
                            <li><FontAwesomeIcon icon={faStarHalfStroke} className="star-icon" /></li>
                            <li><FontAwesomeIcon icon={starRegular} className="star-icon" /></li>
                        </ul>
                    </div>
                </div>

                <div className="col2">
                    <h2>About me</h2>
                    <ul>
                        <li><p>{props.about}</p></li>
                        <li><p>{props.experience}</p></li>
                    </ul>

                    <div className="social">

                        <div className="social-icon linkedin">
                            <a href="https://www.linkedin.com/in/anas-khan-685007242/" target="_blank"><img src="/icon/linkedin.png" alt="linkedin icon" /></a>
                        </div>
                        <div className="wrapper linkedin-wrapper">LinkedIn
                        </div>


                        <div className="social-icon instagram">
                            <a href="https://www.linkedin.com/in/anas-khan-685007242/" target="_blank"><img src="/icon/instagram.png" alt="instagram icon" /></a>
                        </div>
                        <div className="wrapper instagram-wrapper">Instagram</div>

                        <div className="social-icon facebook">
                            <a href="https://www.linkedin.com/in/anas-khan-685007242/" target="_blank"><img src="/icon/facebook.png" alt="facebook icon" /></a>
                        </div>
                        <div className="wrapper facebook-wrapper">Facebook</div>

                        <div className="social-icon twitter">
                            <a href="https://www.linkedin.com/in/anas-khan-685007242/" target="_blank"><img src="/icon/twitter.png" alt="twitter icon" /></a>
                        </div>
                        <div className="wrapper twitter-wrapper">Twitter</div>

                    </div>

                    <button class="button" id="connect-btn" onClick={connected}> <span className="connect-icon-wrapper">
                        <FontAwesomeIcon icon={faLocationArrow} className="connect-icon" />

                        <FontAwesomeIcon icon={faLocationArrow} className="connect-icon connect-icon--copy" />
                    </span>

                        {connectBtn}

                    </button>

                    <Link href="/" className="back-icon"><FontAwesomeIcon icon={faArrowLeft} className="back-arrow"/></Link>
                    <div className="back-icon-wrapper">Go Back</div>
                </div>
                
            </div>
            {/* <Link href="/">GO BACK</Link> */}
        </>
    )
}

export default Fullprofile;



