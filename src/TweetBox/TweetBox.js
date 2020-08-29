import React from 'react';
import "./TweetBox.css";

import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetbox">
            <form>
                <div class="tweetbox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1152096530704285696/C7DLtspZ_400x400.jpg" />
                    <input placeholder="Quoi de neuf ?"></input>
                </div>
                <input className="tweetbox__inputImage" placeholder="Optionnel: entrez l'URL d'une image"></input>
                <Button variant="outlined" className="tweetbox__tweetButton">Tweeter</Button>
            </form>
        </div>
    )
}

export default TweetBox
