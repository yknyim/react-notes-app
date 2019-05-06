import React, { Component } from 'react';
import NotesList from './NotesList';
import NotesDetail from './NotesDetail';
import styles from './NotesApp.module.css';

export class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNote: '1001',
            notes: [         // This will hold an array of objects
                {
                    id: '1001',
                    title: 'first note',
                    text: 'this is the first note'
                },
                {
                    id: '1002',
                    title: 'second note',
                    text: 'yonder, it is the second note'
                },
                {
                    id: '1003',
                    title: 'third note',
                    text: 'imagine poop emojis here.'
                }
            ]
        };
    }

    render() {
        const theNote = this.state.notes.find(note => this.state.selectedNote === note.id);
        return (
        <div className={styles.app}>
            <div className={styles.list}>
                <NotesList 
                    notes={this.state.notes}
                    handleSelection={this._selectNote}
                />
            </div>
            <div className={styles.detail}>
                <NotesDetail 
                    note={theNote}
                    handleSave={this._updateNote}
                />
            </div>
        </div>
        );
    };

    _selectNote = (id) => {
        // choose a note to show
        this.setState({
            selectedNote: id
        });
    }

    _updateNote = (idToUpdate, newText) => {
        // We can't simply reassign the item in the array.
        // So, we need to create a new array with all the existing notes.
        // But, we want to use the newText for the note with id === idToUpdate

        // Version 1
        const updatedNotes1 = this.state.notes.map(note => {
            if (note.id === idToUpdate) {
                // return the modified version
                return {
                    ...note,        // Spread out all the exisiting key-value pairs
                    text: newText   // Overwrite *just* the text property
                };
            } else {
                // return a copy of the note as-is.
                return {
                    ...note
                };
            }
        });
        this.setState({
            notes: updatedNotes1    // Already a copy
        });

        // Version 2a
        // const updatedNotes2 = this.state.notes.filter(note => {
        //     return note.id !== idToUpdate;
        // });
        // const theNoteToUpdate = this.state.notes.find(note => note.id === idToUpdate);
        // this.setState({
        //     notes: [
        //         ...updatedNotes2,
        //         {
        //             ...theNoteToUpdate,
        //             text: newText
        //         }
        //     ]
        // });
        // ====================================================== 
        // Alternatively, version 2b:
        // this.setState({
            
        // });
    }

}

export default NotesApp;
