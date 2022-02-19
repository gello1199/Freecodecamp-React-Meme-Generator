import React from 'react';
import memesData from '../memesData';

const Meme = () => {

    function handleClick() {
        console.log(memesData)
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
                <button onClick={handleClick} className="form--submit">Get a new meme image 🖼</button>
            </div>
        </main>
    );
}

export default Meme;
