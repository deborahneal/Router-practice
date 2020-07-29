import React from 'react';
import letter from '../Assets/DLetter.png';

function Home() {
    return(
        <div className="homePage">

            <img src={letter} className="App-logo" alt="logo"/>
            <p>
                <code><h1 className="Bonjour">Welcome</h1></code> .
            </p>
        </div>
    )
}

export default Home;