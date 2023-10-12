import React from "react";
import Header from "./components/header";
import Profile from "./components/profile";
import Information from "./components/information";
import './index.css'

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container-app">
                <Profile/>
                <Information/>
            </div>
        </div>
    );
}

export default App;
