import React from "react";
import App from "./App";

//we create a new class. 

class SearchBar extends React.Component {
//here we are initalising the state object. 
//by saying term is an empty string. term could be anything. 

    state = { term: ""}; 

//we define out method for when a user changes input in the search bar.
//because it's an event callback we define this function using a fat arrow. 
//this event handler taken and event object (event)
//we want to take the value of the user input out of this event object, 
//and assign it to our state property. 
//this will allow us to type in our video search bar. 
    onInputChange = event => {
//we are calling this.setState 
// and we update the value of our term property,
//with the value from event.target.value
        this.setState({term: event.target.value});

    };
//we create a method called onFormSumbit. 
//this is an arrow function because this is a callback, 
//that we are going to assign some child element. 
    onFormSubmit = event => {
        //we are going to make sure the browser does not automatically try to submit the form, 
        //anytime the user actually passed data in. 
        event.preventDefault();
    };

//render method 
    render() {
//return method 
        return (
        
        <div className="search-bar ui segment">
           
           {/* we need a callback function on our form. 
            so that we can watch for anytime our form gets submitted.
            onSubmit is a specially named property. 
            Anytime the user submit the form we call the callback method
            of this.onFormSubmit
            */}
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    {/* we have made input into a controlled element 
                    we tell the input that its value is coming from this.state.term*/}
                    <input 
                    type="text" 
                    value={this.state.term}
                    /* if we don't use an onChange method, we will be unable to change input on our screen. 
                     if we don't allow input to change, by allowing it to tell us some user
                     has typed in new input, update our state and get the input to rerender
                    our input value we be completely fixed.
                    //The onChange is very special, if we pass a callback handler, to the on
                    //onChange prop it will be update everytime our input changes*/
                    onChange={this.onInputChange}
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar; 