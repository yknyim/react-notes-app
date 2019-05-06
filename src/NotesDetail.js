import React from 'react';

export default function NotesDetail({note}) {
    return (
        <div>
            {note.text}
        </div>
    );
}
