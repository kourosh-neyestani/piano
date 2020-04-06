import React from "react";
import PianoKey from './components/PianoKey';
import './index.scss';

const Piano = () => {
    return (
        <div className="piano">
            {PianoKeys.map((key, i) => (
                <div className="piano-key" key={i}>
                    <PianoKey note={key.note1} flat={true} />
                    {key.note2 ? <PianoKey note={key.note2} flat={false} /> : null}
                </div>
            ))}
        </div>
    )
}

const PianoKeys = [
    {
        note1: "261-C",
        note2: "277-C-sharp"
    },
    {
        note1: "293-D",
        note2: "311-D-sharp"
    },
    {
        note1: "329-E",
        note2: null
    },
    {
        note1: "349-F",
        note2: "369-F-sharp"
    },
    {
        note1: "391-G",
        note2: "415-G-sharp"
    },
    {
        note1: "440-A",
        note2: "466-A-sharp"
    },
    {
        note1: "495-B",
        note2: null
    },
    {
        note1: "523-C",
        note2: "545-C-sharp"
    },
    {
        note1: "587-D",
        note2: "622-D-sharp"
    },
    {
        note1: "659-E",
        note2: null
    },
    {
        note1: "698-F",
        note2: "698-F-sharp"
    },
    {
        note1: "783-G",
        note2: "830-G-sharp"
    },
    {
        note1: "880-A",
        note2: "932-A-sharp"
    },
    {
        note1: "987-B",
        note2: null
    },
];

export default Piano;