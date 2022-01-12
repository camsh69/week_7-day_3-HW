import React, {useState, useEffect} from "react";
import SongList from "../components/SongList";

const SongContainer = () => {

    const [songList, setSongList] = useState([]);

    const getSongs = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(data => setSongList(data.feed.entry));
    }

    useEffect(() => {
        getSongs();
    }, [])

    return (
        <>
            <SongList songList={songList}/>
        </>
    );
}

export default SongContainer;