import React from 'react';
import "./Sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome, faHashtag, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faBell, faEnvelope, faBookmark, faListAlt, faUser } from "@fortawesome/free-regular-svg-icons";
import { Button } from "@material-ui/core";

function Sidebar() {
    return (
        <div class="sidebar">
            <FontAwesomeIcon className="sidebar__twitterIcon" icon={faTwitter} />

            <SidebarOption active icon={faHome} text="Accueil"/>
            <SidebarOption icon={faHashtag} text="Explorer"/>
            <SidebarOption icon={faBell} text="Notifications"/>
            <SidebarOption icon={faEnvelope} text="Messages"/>
            <SidebarOption icon={faBookmark} text="Signets"/>
            <SidebarOption icon={faListAlt} text="Listes"/>
            <SidebarOption icon={faUser} text="Profil"/>
            <SidebarOption icon={faEllipsisH} text="Plus"/>

            <Button variant="outlined" className="sidebar__tweet" >Tweeter</Button>
        </div>
    )
}

export default Sidebar;
