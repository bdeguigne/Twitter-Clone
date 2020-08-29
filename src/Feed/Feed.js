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
        </div>
    )
}

export default Feed;
