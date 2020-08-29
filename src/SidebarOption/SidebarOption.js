import React from 'react';
import "./SidebarOption.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SidebarOption({active, icon, text}) {
    return (
        <div class={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <FontAwesomeIcon icon={icon} />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption;
