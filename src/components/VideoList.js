import React from 'react';
import VideoItem from "./VideoItem"; 

//rather than referencing props.videos.length like we had in the last video
//we can destructure this using ES2015 syntax, just the videos property out of the props object. 

//we are going to map over this videos array. 
//the map method creates a new array with the results of calling a function for every array element. 
//we will then render one single video item for every item in our videos component. 
//we create a functioal component that takes the array of videos
const VideoList = ({ videos }) => {

//the videos.map(video)- this is an array taken from the app component. 
//we then map over it. We taken the inner function, that we pass to map a single argument called video. 
//inside of the videos array, there are many objects which we are refering to video.
//The inner function will be called one time for every object inside videos array. 
   const renderedList = videos.map(video => {
//We then return a VideoItem component. 
//when we map of the Videos array it returns a brand new array, which contains a list of different VideoItem components.
//we assign that list of VideoItem components to a new variable called renderedList.
//renderedList is the result of mapping over the videos array. 
        //we add a property called video and pass it the video that we are looping over.
        //this means in our VideoItem.js our VideoItem cointains a video property.
        //this has all the information about the particular video that we want to show as a list. 
        //the video object {video} is what we got back from the yotube API 
        return <VideoItem video={video} />; 
    });
//instead of returning props.videos within our div, we can destructure the videos property out of the below object.
    return <div>{renderedList}</div>
};

export default VideoList; 