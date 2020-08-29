import React from 'react'
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post"

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Accueil</h2>
            </div>
            <TweetBox />

            <Post
                avatarSrc="https://pbs.twimg.com/profile_images/1045579977067024384/S0luKMwQ_400x400.jpg"
                displayName="Archillect"
                twitterName="archillect"
                timestamp="4 min"
                contentText="We are celebrating The International Day against Nuclear Tests today!"
                contentImage="https://pbs.twimg.com/media/EglOOLyXkAEmtCw?format=jpg&name=medium"
            />

            <Post
                avatarSrc="https://pbs.twimg.com/profile_images/1259427345028562944/MrYfKumx_200x200.jpg"
                displayName="AlphaCast"
                twitterName="AlphaCastFR"
                timestamp="10 min"
                contentText="Si curieux de voir Civ en cast par @LegeLoL! #ZLAN2020"
            />

            <Post
                avatarSrc="https://pbs.twimg.com/profile_images/1045579977067024384/S0luKMwQ_400x400.jpg"
                displayName="Archillect"
                twitterName="archillect"
                timestamp="4 min"
                contentImage="https://pbs.twimg.com/media/Eglp134XkAIpnBU?format=jpg&name=900x900"
            />

            <Post
                avatarSrc="https://pbs.twimg.com/profile_images/1267117170858885120/Tmh6Jdmi_200x200.jpg"
                displayName="World of Engineering"
                twitterName="engineers_feed"
                timestamp="24 min"
                contentText={"Historic invention of the day: 1859: Gaston Planté invents the lead acid battery, the first rechargeable battery."}
                contentImage="https://pbs.twimg.com/media/EglpBIZX0AIC6WT?format=jpg&name=small"
            />
        </div>
    )
}

export default Feed;
