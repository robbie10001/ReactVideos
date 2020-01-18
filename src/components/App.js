import React from "react";
import SearchBar from "./SearchBar"; 
import youtube from "../apis/youtube"; 
import VideoList from "./VideoList";

class App extends React.Component {

//anytime our component is created, its going to have a this.state.videos property that starts out empty. 
//anytime a user eventually searches something, and we get back a list of videos, 
//we will go ahead and take that list of videos and set them on our state. 
    state = { videos: [] }; 
    
//this is going to be called with some search term string.
//the reason we have called this onTermSubmit is that inside of our SearchBar.js 
//we have called the state (term), term being short for search term. 
// This is a good idea in terms of the terminology we are using throughout our application. 
    onTermSubmit =  async (term) => {
//now we are able to fetch a list of videos from the youtube API inside of our on term submit function. 
//here we can call the youtube function. 
//This is now a preconfigured  instances of axios (api/youtube.js)
//we pass in the route that we want to make a get request too. 
//now that we know the search term, 
//we can pass in the params of q (this is from youtube api docs) 

const response = await youtube.get("/search", {
        params: {
            q: term 
    //our search string is term, this is the argument passed into our onTermSubmit function. 
    //this is an async api request, in order to use it we need to either use a promise or async await. 
        
        }
    })
    //this is the list of videos that we care about. 
    this.setState( { videos: response.data.items })
    };

//render method
    render() {
//return method 
//we expand the return method by using ( )

        return (
        <div className="ui container">
{/* On our searchbar, we are going to call our OnTermSubmit as a prop
Anytime we add a prop or callback name, to a component that we manually ourselves create, 
we can use any prop name that we want to use. onFormSubmit makes sense in terms of our application build */} 
            <SearchBar onFormSubmit = {this.onTermSubmit} />
            <VideoList videos= {this.state.videos} /> 
        </div>
        );
    }
}

export default App;