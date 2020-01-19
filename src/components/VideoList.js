import React from 'react';
import VideoItem from "./VideoItem"; 


const VideoList = ({ videos }) => {
   const renderedList = videos.map((video) => {
        return <VideoItem />; 
    });
//instead of returning props.videos within our div, we can destructure the videos property out of the below object.
    return <div>{renderedList}</div>
};

export default VideoList; 