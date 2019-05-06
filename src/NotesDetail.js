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
            draftText: props.note.text,
            id: props.note.id
        };
    }
    static getDerivedStateFromProps(props, state) {
        // There is no `this`.
        // So, we receive props and state as arguments.

        // Must return an object that describes any modifications to state.
        if (props.note.id !== state.id) {
            return {
                id: props.note.id,
                draftText: props.note.text
            };
        } else {
            return null
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
                <button onClick={this._saveDraft}>Save</button>
            </div>
        );
    }

    _saveDraft = () => {
        this.props.handleSave(this.state.id, this.state.draftText);
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