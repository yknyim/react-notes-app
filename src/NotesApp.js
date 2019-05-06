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
                    text: 'imagine poop emojies here.'
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

}

export default NotesApp;
