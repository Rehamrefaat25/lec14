import React from 'react'
import { useContext } from 'react'
import { themecontext } from '../../App'
import './Header.css'
import moon from '../../assets/images/icon-moon.svg'
import  sun from "../../assets/images/icon-sun.svg"
import octocat from "../../assets/images/583231.png"
import search from '../../assets/images/icon-search.svg'
import company from '../../assets/images/icon-company.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import website from '../../assets/images/icon-website.svg'
import location from '../../assets/images/icon-location.svg'

function Header() {
  
  const passedvalue=useContext(themecontext)
    function handleonchange(event){
        var newvalue;
        if(event.target.checked==true){newvalue="dark"}
        else{newvalue="light"}
        passedvalue.changetheme(newvalue)
      }
  return (
<div className={`header ${passedvalue.theme}`}>
    
<div className='brand'>

    <div className="devfinder">
        <h1>devfinder</h1>
    </div>
    <div>
<label>{passedvalue.theme === "light" ? "Light" : "Dark"}</label>
<input
 type="checkbox"onChange={handleonchange}/>
<img src={passedvalue.theme === "light" ? sun : moon} alt="theme icon"  ></img>
    </div>
</div>

      <div className="search">
      <img src={search}></img>
        <input type="text"   placeholder="Search GitHub username..." />
        <button>Search</button>
      </div>
    <div className="profile-card">
      
      <div className="profile">
        <img src={octocat} className="avatar"/>
        <div className="profile-details">
          <h4>The Octocat</h4>
          <h5>@octocat</h5>
          <p>This profile has no bio</p>
        </div>
          <p>Joined 25 Jan 2011</p>
      </div>
      
      <div className="stats">
        <div className="stat">
          <p>Repos</p>
          <h3>8</h3>
        </div>
        <div className="stat">
          <p>Followers</p>
          <h3>3938</h3>
        </div>
        <div className="stat">
          <p>Following</p>
          <h3>9</h3>
        </div>
      </div>

      <div className="contact">
      <div>
        <p> <img src={location}></img> San Francisco</p>
        <p> <img src={website}></img> https://github.blog</p>
      </div>
      <div>
        <p > <img src={twitter}></img>Not Available</p>
        <p> <img src={company}></img> @github</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Header