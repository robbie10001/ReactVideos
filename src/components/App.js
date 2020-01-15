import React from "react";
import SearchBar from "./SearchBar"; 
import youtube from "../apis/youtube"

class App extends React.Component {
    
//this is going to be called with some search term string.
//the reason we have called this onTermSubmit is that inside of our SearchBar.js 
//we have called the state (term), term being short for search term. 
// This is a good idea in terms of the terminology we are using throughout our application. 
    onTermSubmit =  async (term) => {
//here we can call the youtube function. 
//This is now a preconfigured  instances of axios (api/youtube.js)
//we pass in the route that we want to make a get request too. 
//now that we know the search term, 
//we can pass in the params of q (this is from youtube api docs) 
const response = await youtube.get("/search", {
        params: {
    //our search string is term, this is the argument passed into our onTermSubmit function. 
    //this is an async api request, in order to use it we need to either use a promise or async await. 
            q: term 
        }
    });
    console.log(response);
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
        </div>
        );
    }
}

export default App;