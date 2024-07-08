import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Text = () => {

    const [editMode, setEditMode] = useState(false);

    const [text, setText] = useState('Double click to edit');

    return (
        <Draggable>
            {
                editMode ?
                    (<input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onDoubleClick={(e) => setEditMode(false)}
                    />) :
                    (<h1 onDoubleClick={(e) => setEditMode(true)}>{text}</h1>)
            }
        </Draggable>
    )
}

export default Text;