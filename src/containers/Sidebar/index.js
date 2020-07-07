import React from 'react';
import './styles.scss';
import { FaMapMarkerAlt as Map, FaRegUser as Contact } from 'react-icons/fa';
import { RiDashboardLine as Dashboard, RiBarChartBoxLine as Report } from 'react-icons/ri';
import { IoMdBriefcase as Deal, IoIosBusiness as Account } from 'react-icons/io';
import { MdSearch as Search, MdAdd as Add, MdSettings as Settings } from 'react-icons/md';
import { Avatar } from '../../components';

const nav = [
    { label: 'Dashboard', icon: <Dashboard /> },
    { label: 'Accounts', icon: <Account /> },
    { label: 'Contacts', icon: <Contact /> },
    { label: 'Deals', icon: <Deal /> },
    { label: 'Reports', icon: <Report /> }

]
export default function Sidebar() {
    return (
        <nav className="sidebar">
            <div className="sidebar-wrapper">
                <div className='logo'>
                    <Map />
                    <div>
                        mapmycustomers
                    </div>
                </div>
                <div className="navigation-items">
                    {nav.map(navItem => <div key={navItem.label} className="nav-item">
                        {navItem.icon}
                        <div>
                            {navItem.label}</div>
                    </div>)}
                </div>
                <div className="menu-items">
                    <Search />
                    <Add />
                    <Settings />
                    <Avatar />
                </div>
            </div>
        </nav>

    )
}