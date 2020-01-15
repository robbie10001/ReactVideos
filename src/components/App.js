import React from "react";
import SearchBar from "./SearchBar"; 

class App extends React.Component {
//render method
    render() {
//return method 
//we expand the return method by using ( )

        return (
        <div className="ui container">
            <SearchBar />
        </div>
        );
    }
}

export default App;