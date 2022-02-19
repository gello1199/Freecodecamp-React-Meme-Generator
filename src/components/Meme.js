import React from 'react';
import memesData from '../memesData';

const Meme = () => {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <div className="form">
                <input 
                    className="form--left-input" 
                    type="text" 
                    placeholder="Top Text"
                    />
                <input 
                    className="form--right-input" 
                    type="text" 
                    placeholder="Bottom Text"
                    /> 
                <button onClick={getMemeImage} className="form--submit">Get a new meme image 🖼</button>
            </div>
        </main>
    );
}

export default Meme;
