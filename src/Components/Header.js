import React from 'react'
import '../Style/Header.css'
import logo from '../logo.svg'

const Header = () => {

const callme=()=>{
  console.log("clicked");
}

  return (
    <div>
<div className='Header_bar'>
<div className='container-fluid d-flex justify-content-around align-items-center'>
     
     <div className='Brand_logo'><h6>MUNIVERSE</h6></div>
     <button className="btns  " onClick={callme}>
     <div className='logo_icon'>
        <img className='App-logo' src={logo} alt="" style={{width:"100%"}} />
     </div>
     </button>
    
      <div className='NavLinks'>
<ul className='list-unstyled  d-flex justify-content-center align-items-center pt-3'>
<li><a href="https://muniverse.com">Watch & Learn</a></li>
<li><a href="https://muniverse.com">Mentors</a></li>
<li><a href="https://muniverse.com">Workshop</a></li>
<li><a href="https://muniverse.com">On Demand </a></li>
<li><a href="https://muniverse.com">Login</a></li>
</ul>

      </div>
      
      <div className='button_mentor'><button className='btn button_color'>Apply As Mentor</button></div>
</div>
</div>
    </div>
  )
}

export default Header