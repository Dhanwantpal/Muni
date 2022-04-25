import React from 'react';
import Sidebar from './Sidebar';
import WEHeader from './WEHeader';
import Footer from './Footer';
import '../Style/watch.css';

const Watch = () => {
  return (
    <div>
        <WEHeader />
        <div className='container-fluid'>
         <div className='row'>
             <div className='col-md-2 sidebars'>
                 <Sidebar />
             </div>
             <div className='col-md-10 right_side'>
                 
             </div>
         </div>
        </div>
        <Footer />
    </div>
  )
}

export default Watch