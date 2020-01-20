import React from 'react'
//here we are creating the videoDetail component. 
//we are passing down a prop (video) which is the currently selected video on the apps state property. 
//this will show a video player and a title and description underneath the player. 
//below we have created a functional component. 
//VideoDetail is called with the props object of ({video})
//by defining our props argument as video, we no longer need to write code throughout our function as below,
//props.video, we can instead just reference video. 
//now that we have this component, we can render it within our render method within our app  component. 
const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }

const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe title="videoplayer" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    
    );
};

export default VideoDetail;