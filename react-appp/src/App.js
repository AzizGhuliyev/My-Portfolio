import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer"

export default class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    )
  }
}