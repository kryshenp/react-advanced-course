import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        console.log("EDITING...");
        setIsEditing(true);
    }

    let editElementContent;
    editElementContent = !isEditing ? (
        <span className="player-name">{name}</span>
    ) : (
        <input type="text" />
    );

    return (
        <li>
            <span className="player">
                {editElementContent}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleEdit()}>Edit</button>
        </li>
    );
}
