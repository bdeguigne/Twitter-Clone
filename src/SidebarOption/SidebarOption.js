import React from 'react';
import "./SidebarOption.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SidebarOption({ active, icon, text }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <div className="sidebarOption__item">
                <FontAwesomeIcon icon={icon} />
                <h2>{text}</h2>
            </div>
        </div>
    )
}

export default SidebarOption;
