import React, { useState } from "react";

const PianoKey = (props) => {

    const [playing, setPlaying] = useState(false);
    const { note, flat } = props;
    const onStart = () => {
        setPlaying(true)
    }

    const onStop = () => {
        setPlaying(false)
    }

    const getSource = () => {
        return `/media/${note}.mp3`;
    }

    return (
        <div
            className={`piano-key-${flat ? `white` : `black`}`}
            onMouseDown={onStart}
            onMouseUp={onStop}
        >
            {console.log(playing)}
            {console.log(getSource())}
        </div>
    )
}

export default PianoKey;