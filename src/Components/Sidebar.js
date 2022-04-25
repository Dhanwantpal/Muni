import React from 'react'
import home from '../Images/home.png'
import trend from '../Images/icon1.png'
import about from '../Images/about.png'
import aca from '../Images/aca.png'
import cam from '../Images/cam.png'
import live from '../Images/live.png'
import strea from '../Images/strea,.png'
import cate from '../Images/cate.png'
import '../Style/sidebar.css'

const Sidebar = () => {
  return (
    <div style={{position:"relative",height: "110vh"}}> 
<div className='container-fluid sidebars'>
<button className='sidebar_button active_btn'>
    <div className='d-flex justify-content-start'>
<div className='mr-1'><img src={home} alt="" /></div>
<div className='mr-1'>HOME</div>
    </div>

    </button> 
<button className='sidebar_button'>
<div className='d-flex justify-content-start justify-content-around'>
<div className='mr-1'><img src={trend} alt="" /></div>
<div className='mr-1'> TRENDING</div>
    </div>
 
     </button> 
  <button className='sidebar_button'>
  <div className='d-flex justify-content-start justify-content-around'>
<div className='mr-1'><img src={aca} alt="" /></div>
<div className='mr-1'>ACADEMY</div>
    </div>
 
     </button> 
  <button className='sidebar_button'>
  <div className='d-flex justify-content-start justify-content-around'>
<div className='mr-1'><img src={cate} alt="" /></div>
<div className='mr-1'>CATEGORIES</div>
    </div>
      </button> 

  <button className='sidebar_button'>
  <div className='d-flex justify-content-start justify-content-around'>
<div className='mr-1'><img src={strea} alt="" /></div>
<div className='mr-1'> STREAMERS</div>
    </div>
     </button> 

  <button className='sidebar_button'>
  <div className='d-flex justify-content-start justify-content-around'>
<div className='mr-1'><img src={live} alt="" /></div>
<div className='mr-1'>  LIVE NOW</div>
    </div>
    </button> 

  <button className='sidebar_button'>
  <div className='d-flex justify-content-start justify-content-around'>
<div className='mr-1'><img src={cam} alt="" /></div>
<div className='mr-1'>  VIDEOS</div>
    </div>
     </button> 

  <button className='sidebar_button'>
  <div className='d-flex justify-content-start justify-content-around'>
<div className='mr-1'><img src={about} alt="" /></div>
<div className='mr-1'> ABOUT US</div>
    </div>
      </button> 

  
</div>


    </div>
  )
}

export default Sidebar