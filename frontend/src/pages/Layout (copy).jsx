import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="columns mt-6" style={{ minHeight: "100vh" }}>
                <div className="columns is-2"><Sidebar /></div>
                <div className="columns has-background-light">
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;