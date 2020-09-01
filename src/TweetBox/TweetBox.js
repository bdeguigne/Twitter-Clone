import React, { useState } from 'react';
import "./TweetBox.css";

import { Avatar, Button } from '@material-ui/core';
import db from "../firebase";

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Brice D.",
            twitterName: "SlyShadowz_",
            avatarSrc: "https://pbs.twimg.com/profile_images/1152096530704285696/C7DLtspZ_400x400.jpg",
            contentText: tweetMessage,
            contentImage: tweetImage,
            timestamp: new Date()
        })

        setTweetImage("");
        setTweetMessage("");
    }

    return (
        <div className="tweetbox">
            <Avatar src="https://pbs.twimg.com/profile_images/1152096530704285696/C7DLtspZ_400x400.jpg" />
            <form>
                <div className="tweetbox__input">
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="Quoi de neuf ?">
                    </input>
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetbox__inputImage"
                    placeholder="Optionnel: entrez l'URL d'une image">
                </input>
                <Button onClick={sendTweet} type="submit" variant="outlined" className="tweetbox__tweetButton">Tweeter</Button>
            </form>
        </div>
    )
}

export default TweetBox
