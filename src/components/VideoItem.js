import React from 'react'


//The props withi VideoItem now contains video within it. 
const VideoItem = ( { video }) => {

//we actually want to render out a list of videos. We want multiple video items when our application is rendered on screen. 
//every VideoItem component is going to recieve, a seperate video object.
//each VideoItem is will be customised to display a slightly different video. 
//in our img we are finding a thumbnail for each of our five videos. 
return (
    <div>
        <img src={video.snippet.thumbnails.medium.url} />
        {video.snippet.title}
    </div>
    );
};


export default VideoItem;