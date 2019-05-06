import React from 'react';

class NotesDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // declares the note variable and assigns them to the properties of this.props where the name matches.
        const {note} = this.props
        return (
            <div>
                {note.text}
            </div>
        );
    }
}


export default NotesDetail;