import React from 'react';

const Meme = () => {
    return (
            <form className="form">
                <input className="form--left-input" type="text" />
                <input className="form--right-input" type="text" /> 
                <button className="form--submit" type="submit" >
                    <div className="form--submit-title">
                        Get a new meme image
                    </div>
                </button>
            </form>
    );
}

export default Meme;
