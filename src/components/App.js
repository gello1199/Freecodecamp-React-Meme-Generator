import React from 'react';
import Header from './Header';
import Meme from './Meme';

const App = () => {
    function handleClick() {
        console.log("I was clicked")
    }

    function handleMouse() {
        console.log("Hover")
    }

    return (
        <div>
            <Header />
            <Meme />

            <img onMouseEnter={handleMouse} src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default App;
