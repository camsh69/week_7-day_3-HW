import React from "react";
import './SongItem.css';

const SongItem = ({songName, artist, index, img, artistPage, songPage}) => {

   const position = index + 1;

    return(
       
            <div className="card">
            <img src={img}></img>
            <div className="container">
                <h4>{position}. {songName}</h4>
                <div>
                    <a className="preview" href={songPage}>Preview &gt; &gt;</a>
                </div>
                <p><a href={artistPage}>{artist}</a></p>
            </div>
            </div>
      
    )
}

export default SongItem;