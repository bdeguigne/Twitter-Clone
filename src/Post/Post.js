import React, { forwardRef, useEffect, useState } from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faHeart, faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { displayTime } from "../utils";
import moment from 'moment';

const Post = forwardRef(({ avatarSrc, displayName, twitterName, timestamp, contentText, contentImage }, ref) => {
    const [elapsedTime, setElapsedTime] = useState("");

    useEffect(() => {
        if (timestamp.seconds) {
            var postTime = moment.unix(timestamp.seconds);
            setElapsedTime(displayTime(postTime));
        }
    }, [timestamp])

    return (
        <div className="post" ref={ref}>
            <Avatar className="post__avatar" src={avatarSrc} />
            <div className="post__container">
                <div className="post__head">
                    <h3>{displayName}</h3>
                    <p className="post__head__twitterName">@{twitterName}</p>
                    <span>·</span>
                    <p className="post__head__timestamp">{elapsedTime}</p>
                </div>
                <div className="post__content">
                    {contentText && (
                        <p>{contentText}</p>
                    )}
                    {contentImage && (
                        <img alt="tweet content" src={contentImage}></img>
                    )}
                </div>
                <div className="post__footer">
                    <FontAwesomeIcon icon={faCommentAlt} />
                    <FontAwesomeIcon icon={faRetweet} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShareSquare} />
                </div>
            </div>
        </div>
    )
});

export default Post;
