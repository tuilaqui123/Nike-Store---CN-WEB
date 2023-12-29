import React from 'react';
import ReactPlayer from 'react-player'
import './season.css'

function SeasonContent({ videoUrl, tilte, content }) {
    return (
        <div className="season-content">
            <ReactPlayer
                className="video"
                width="90%"
                height="90%"
                url={videoUrl}
                controls={false}
                playing={true}
                loop={true}
                muted={true}
            />
            <h1>{tilte}</h1>
            <p>{content}</p>
            <button className="shop-button">
                <p>Shop</p>
            </button>
        </div>
    );
}

export default SeasonContent;