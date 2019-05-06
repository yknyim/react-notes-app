import React, { Component } from 'react';
import NotesList from './NotesList';
import NotesDetail from './NotesDetail';
import styles from './NotesApp.module.css';

export class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        return (
        <div className={styles.app}>
            <div className={styles.list}>
                <NotesList 
                    notes={this.state.notes}
                />
            </div>
            <div className={styles.detail}>
                <NotesDetail />
            </div>
        </div>
        );
    };
}

export default NotesApp;
