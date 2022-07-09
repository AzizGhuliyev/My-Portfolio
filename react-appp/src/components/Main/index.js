import React from 'react';
import Left from "./Left"
import Right from "./Right"
import "./Main.css"
class Main extends React.Component {
    render() { 
        return (
            <>
                <Left/>
                <Right/>
            </>
        );
    }
}
 
export default Main;
