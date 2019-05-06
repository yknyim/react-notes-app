import React from 'react';

function NotesEditor({text, handleChange}) {
    return (
        <textarea value={text} onChange={(e) => {
            handleChange(e.target.value);
        }} />
    );
}

class NotesDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditting: false,
            draftText: props.note.text
        };
    }
    render() {
        // declares the note variable and assigns them to the properties of this.props where the name matches.
        const {note} = this.props;
        const {isEditting, draftText} = this.state;
        return (
            <div>
                {
                    isEditting ? <NotesEditor 
                                    handleChange={this._changeDraftText} 
                                    text={draftText}
                                    /> 
                            : draftText
                }
                <br />
                <button onClick={this._toggleIsEditing}>Toggle</button>
            </div>
        );
    }

    _toggleIsEditing = () => {
        this.setState({
            isEditting: !this.state.isEditting
        });
    }

    _changeDraftText = (newText) => {
        this.setState({
            draftText: newText
        });
    }

}


export default NotesDetail;