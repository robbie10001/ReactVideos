import React from 'react';
import "./VideoItem.css";

//The props withi VideoItem now contains video within it. 
//we add in onVideoSelect
const VideoItem = ( { video, onVideoSelect }) => {

//we actually want to render out a list of videos. We want multiple video items when our application is rendered on screen. 
//every VideoItem component is going to recieve, a seperate video object.
//each VideoItem is will be customised to display a slightly different video. 
//in our img we are finding a thumbnail for each of our five videos. 
//we now put in our onClick method. 
return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
            <div className="header">{video.snippet.title}</div>
        </div>
    </div>
    );
};


export default VideoItem;