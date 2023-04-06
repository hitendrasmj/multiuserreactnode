import React from 'react';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
        <Navbar/>
        <div id="base"> 
            <div className="offcanvas"></div>
            {children}
            <LeftSidebar/>
            <RightSidebar/>
        </div>    
        </React.Fragment>
    )
}

export default Layout;