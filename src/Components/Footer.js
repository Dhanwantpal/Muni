import React from 'react'
import '../Style/footer.css'
import fb from '../Images/Vector.png'

const Footer = () => {
  return (
    <div>
<div className='container-fluid footer py-3'>
<div className='row'>
<div className='col-md-6 footer_heading p-5' >
<h1>Learn from the best. <br/>
Grow your Skills. <br/>
Get Mentored.</h1>
</div>
<div className='col-md-2 footer_links' >
<ul className='list-unstyled'>
    <li><a href="https://muni.com">Home</a></li>
    <li><a href="https://muni.com">About Us</a></li>
    <li><a href="https://muni.com">Our Mentor</a></li>
    <li><a href="https://muni.com">Domains</a></li>
    <li><a href="https://muni.com">Blogs</a></li>
</ul>
</div>
<div className='col-md-4 footer_links' >
<ul className='list-unstyled'>
    <li><a href="https://muni.com">Apply as Creator</a></li>
    <li><a href="https://muni.com">Privacy</a></li>
    <li><a href="https://muni.com">Terms & Conditions</a></li>
</ul>
</div>
</div>

<div className='row'>
<div className='col-md-8 rights'>
    <p>© 2022, All rights reserved by Muniverse Pvt. Ltd.</p>
</div>
<div className='col-md-4'>
<div className='social_icons'>
    <p>Connect with us</p>
    <ul className='d-flex list-unstyled'>
        <li className=''><a href="https://muni.com"><img src={fb} alt="" /></a></li>
        <li className=''><a href="https://muni.com"><img src={fb} alt="" /></a></li>
        <li className=''><a href="https://muni.com"><img src={fb} alt="" /></a></li>
        <li className=''><a href="https://muni.com"><img src={fb} alt="" /></a></li>
        <li className=''><a href="https://muni.com"><img src={fb} alt="" /></a></li>
    </ul>
</div>
</div>
</div>

</div> 
    </div>
  )
}

export default Footer