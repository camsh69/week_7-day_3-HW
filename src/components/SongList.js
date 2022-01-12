import React from "react";
import SongItem from "./SongItem";
import "./SongList.css";

const SongList = ({songList}) => {

    const songItems = songList.map((song, index) => {
        return <SongItem songName={song['im:name'].label} artist={song['im:artist'].label} songPage={song['im:collection'].link.attributes.href} artistPage={song['im:artist'].attributes.href} index={index} img={song['im:image']['2'].label} key={index}/>
    })

    return (
        <section>
            <h1>UK 'Rock' Top 20</h1>
            <div class="card-container">
            {songItems}
            </div>
        </section>
    )
}

export default SongList;