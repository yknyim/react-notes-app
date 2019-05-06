import React from 'react';

function NotesEditor({text}) {
    return (
        <textarea value={text} />
    );
}

class NotesDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditting: false
        };
    }
    render() {
        // declares the note variable and assigns them to the properties of this.props where the name matches.
        const {note} = this.props;
        const {isEditting} = this.state;
        return (
            <div>
                {
                    isEditting ? <NotesEditor text={note.text} /> : note.text
                }
            </div>
        );
    }
}


export default NotesDetail;