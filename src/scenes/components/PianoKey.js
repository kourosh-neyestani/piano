import React, { useState } from "react";
import ReactHowler from 'react-howler'

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
            <ReactHowler
                src={getSource()}
                playing={playing}
            />
        </div>
    )
}

export default PianoKey;