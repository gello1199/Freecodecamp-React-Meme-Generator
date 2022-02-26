import React, { useState } from 'react';
import memesData from '../memesData';

const Meme = () => {
    const [meme, setMeme] = useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
       setMeme(prevMeme => {
           return {
               ...prevMeme,
               randomImage: url
           }
       })  
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
            <img src={meme.randomImage} className="meme--image" />
        </main>
    );
}

export default Meme;
