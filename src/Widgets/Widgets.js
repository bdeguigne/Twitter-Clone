import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed } from "react-twitter-embed"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <FontAwesomeIcon icon={faSearch} />
                <input placeholder="Recherche Twitter"></input>
            </div>
            <div className="widgets__widgetsContainer">
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="SlyShadowz_"
                    theme="dark"
                    options={{ height: 600 }}
                    transparent
                />
            </div>
        </div>
    )
}

export default Widgets;
