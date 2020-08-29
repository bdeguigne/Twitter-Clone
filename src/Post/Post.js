import React from 'react';
import "./Post.css";

import { Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faHeart, faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

function Post({ avatarSrc, displayName, twitterName, timestamp, contentText, contentImage }) {
    return (
        <div class="post">
            <Avatar className="post__avatar" src={avatarSrc} />
            <div class="post__container">
                <div class="post__head">
                    <h3>{displayName}</h3>
                    <p class="post__head__twitterName">@{twitterName}</p>
                    <span>·</span>
                    <p class="post__head__timestamp">{timestamp}</p>
                </div>
                <div class="post__content">
                    {contentText && (
                        <p>{contentText}</p>
                    )}
                    {contentImage && (
                        <img alt="tweet content" src={contentImage}></img>
                    )}
                </div>
                <div class="post__footer">
                    <FontAwesomeIcon icon={faCommentAlt} />
                    <FontAwesomeIcon icon={faRetweet} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShareSquare} />
                </div>
            </div>
        </div>
    )
}

export default Post
