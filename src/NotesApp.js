import React, { Component } from 'react';
import NotesList from './NotesList';
import NotesDetail from './NotesDetail';

export class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []     // This will hold an array of objects
        };
    }

    render() {
        return (
        <div>
            <NotesList />
            <NotesDetail />
        </div>
        );
    };
}

export default NotesApp;
