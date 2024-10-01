"use client"

import Link from "next/link"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const Page = () => {
  return (
    <>
      <div className="main-heading">
        {/* <h1>Your Route to Connecting with Profiles</h1> */}
        <h1>YOUR ROUTE TO CONNECTING WITH <span>PROFILES</span></h1>
      </div>

      <div className="container">
        {/* ===============================  CARD 1  ================================ */}
        <div className="card">
          <div className="profile">
            <img src="/images/boy1.jpg" alt="Profile" />
          </div>
          <div className="info">
            <h2>Alex David</h2>
            <p className="profession"><FontAwesomeIcon icon={faUserTie} className="icon" />Graphics Designer</p>
            <p className="intro">A creative expert in visual design, combining graphics, text, and images to communicate ideas.</p>
          </div>
          <div className="btn">
            <Link href="Boy1" className="open-btn"><FontAwesomeIcon icon={faEnvelope} className="icon" />GET IN TOUCH</Link>
          </div>
        </div>

        {/* ===============================  CARD 2  ================================ */}

        <div className="card">
          <div className="profile">
            <img src="/images/girl1.jpg" alt="Profile" />
          </div>
          <div className="info">
            <h2>Emma Collins</h2>
            <p className="profession"><FontAwesomeIcon icon={faUserTie} className="icon" />Software Engineer</p>
            <p className="intro">Crafting efficient and innovative software solutions through clean code.</p>
          </div>
          <div className="btn">
            <Link href="Girl1" className="open-btn"><FontAwesomeIcon icon={faEnvelope} className="icon" />GET IN TOUCH</Link>
          </div>
        </div>

        {/* ===============================  CARD 3  ================================ */}

        <div className="card">
          <div className="profile">
            <img src="/images/boy7.jpg" alt="Profile" />
          </div>
          <div className="info">
            <h2>Noah Brooks</h2>
            <p className="profession"><FontAwesomeIcon icon={faUserTie} className="icon" />UI/UX Designer</p>
            <p className="intro">Focused on creating intuitive and visually appealing user experiences.</p>
          </div>
          <div className="btn">
            <Link href="Boy2" className="open-btn"><FontAwesomeIcon icon={faEnvelope} className="icon" />GET IN TOUCH</Link>
          </div>
        </div>

        {/* ===============================  CARD 4  ================================ */}

        <div className="card">
          <div className="profile">
            <img src="/images/girl2.jpg" alt="Profile" />
          </div>
          <div className="info">
            <h2>Olivia Parker</h2>
            <p className="profession"><FontAwesomeIcon icon={faUserTie} className="icon" />Web Developer</p>
            <p className="intro">Building responsive, visually stunning websites with smooth user interfaces.</p>
          </div>
          <div className="btn">
            <Link href="Girl2" className="open-btn"><FontAwesomeIcon icon={faEnvelope} className="icon" />GET IN TOUCH</Link>
          </div>
        </div>

        {/* ===============================  CARD 5  ================================ */}

        <div className="card">
          <div className="profile">
            <img src="/images/boy3.jpg" alt="Profile" />
          </div>
          <div className="info">
            <h2>Aiden Parker</h2>
            <p className="profession"><FontAwesomeIcon icon={faUserTie} className="icon" />Mobile App Developer</p>
            <p className="intro">Building smooth, high-performance mobile apps for iOS and Android platforms.</p>
          </div>
          <div className="btn">
            <Link href="Boy3" className="open-btn"><FontAwesomeIcon icon={faEnvelope} className="icon" />GET IN TOUCH</Link>
          </div>
        </div>

        {/* ===============================  CARD 6  ================================ */}

        <div className="card">
          <div className="profile">
            <img src="/images/boy4.jpg" alt="Profile" />
          </div>
          <div className="info">
            <h2>James Rivers</h2>
            <p className="profession"><FontAwesomeIcon icon={faUserTie} className="icon" />Game Developer</p>
            <p className="intro">Bringing imagination to life through interactive and immersive game design.</p>
          </div>
          <div className="btn">
            <Link href="Boy4" className="open-btn"><FontAwesomeIcon icon={faEnvelope} className="icon" />GET IN TOUCH</Link>
          </div>
        </div>


        {/* ===============================  CARD 7  ================================ */}

        <div className="card">
          <div className="profile">
            <img src="/images/boy6.jpg" alt="Profile" />
          </div>
          <div className="info">
            <h2>Henry Ford</h2>
            <p className="profession"><FontAwesomeIcon icon={faUserTie} className="icon" />Digital Marketer</p>
            <p className="intro">Creating impactful digital campaigns that drive engagement and conversions.</p>
          </div>
          <div className="btn">
            <Link href="Boy5" className="open-btn"><FontAwesomeIcon icon={faEnvelope} className="icon" />GET IN TOUCH</Link>
          </div>
        </div>


        {/* ===============================  CARD 8  ================================ */}

        <div className="card">
          <div className="profile">
            <img src="/images/girl3.jpg" alt="Profile" />
          </div>
          <div className="info">
            <h2>Amelia Hayes</h2>
            <p className="profession"><FontAwesomeIcon icon={faUserTie} className="icon" />Software Engineer</p>
            <p className="intro">Crafting efficient and innovative software solutions through clean code.</p>
          </div>
          <div className="btn">
            <Link href="Girl3" className="open-btn"><FontAwesomeIcon icon={faEnvelope} className="icon" />GET IN TOUCH</Link>
          </div>
        </div>


        {/* ===============================  CARD 9  ================================ */}

        <div className="card">
          <div className="profile">
            <img src="/images/girl6.jpg" alt="Profile" />
          </div>
          <div className="info">
            <h2>Ella Scott</h2>
            <p className="profession"><FontAwesomeIcon icon={faUserTie} className="icon" />Game Developer</p>
            <p className="intro">Creating immersive, interactive games that captivate players.</p>
          </div>
          <div className="btn">
            <Link href="Girl4" className="open-btn"><FontAwesomeIcon icon={faEnvelope} className="icon" />GET IN TOUCH</Link>
          </div>
        </div>


        {/* ===============================  CARD 10  ================================ */}

        <div className="card">
          <div className="profile">
            <img src="/images/girl8.jpg" alt="Profile" />
          </div>
          <div className="info">
            <h2>Mia Brooks</h2>
            <p className="profession"><FontAwesomeIcon icon={faUserTie} className="icon" />Cybersecurity Specialist</p>
            <p className="intro">Ensuring digital safety by securing networks and preventing cyber threats.</p>
          </div>
          <div className="btn">
            <Link href="Girl5" className="open-btn"><FontAwesomeIcon icon={faEnvelope} className="icon" />GET IN TOUCH</Link>
          </div>
        </div>


        {/* ===============================  CARD 11  ================================ */}

        <div className="card">
          <div className="profile">
            <img src="/images/boy2.jpg" alt="Profile" />
          </div>
          <div className="info">
            <h2>Lucas Adams</h2>
            <p className="profession"><FontAwesomeIcon icon={faUserTie} className="icon" />UI/UX Designer</p>
            <p className="intro">Focused on creating intuitive and visually appealing user experiences.</p>
          </div>
          <div className="btn">
            <Link href="Boy6" className="open-btn"><FontAwesomeIcon icon={faEnvelope} className="icon" />GET IN TOUCH</Link>
          </div>
        </div>

      </div>


    </>
  )
}

export default Page;