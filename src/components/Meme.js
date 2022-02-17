import React from 'react';

const Meme = () => {
    return (
        <main>
            <form className="form">
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
                <button className="form--submit">Get a new meme image 🖼</button>
            </form>
        </main>
    );
}

export default Meme;
