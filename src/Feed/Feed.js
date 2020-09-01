import React, { useEffect, useState } from 'react';
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../firebase";
import FlipMove from "react-flip-move";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("POSTS", posts);
    }, [posts])

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }
            )))
        ))
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Accueil</h2>
            </div>
            <TweetBox />

            <FlipMove>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        avatarSrc={post.data.avatarSrc}
                        displayName={post.data.displayName}
                        twitterName={post.data.twitterName}
                        timestamp={post.data.timestamp}
                        contentText={post.data.contentText}
                        contentImage={post.data.contentImage}
                    />
                ))}
            </FlipMove>

        </div>
    )
}

export default Feed;
