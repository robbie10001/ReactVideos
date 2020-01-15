import React from "react";
import App from "./App";

//we create a new class. 

class SearchBar extends React.Component {
//here we are initalising the state object. 
//by saying term is an empty string. term could be anything. 
//
    state = { term: ""}; 

//we define out method for when a user changes input in the search bar.
//because it's an event callback we define this function using a fat arrow. 
    onInputChange = () => {


    };

//render method 
    render() {
//return method 
        return (
        
        <div className="search-bar ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    {/* 1.a we have made input into a controlled element 
                    we are tell the input that its value is coming from this.state.term*/}
                    <input 
                    type="text" 
                    value={this.state.term}
                    /* if we don't use an onChange method, we will be unable to change input on our screen. 
                     if we don't allow input to change, by allowing it to tell us some user
                     has typed in new input, update our state and get the input to rerender
                    our input value we be completely fixed.
                    //The onChange is very special, if we pass a callback handler, to the on
                    //onChange prop it will be update everytime our input changes 
                    */
                    onChange={this.onInputChange}
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar; 