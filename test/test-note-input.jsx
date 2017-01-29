import React, {Component} from 'react'


export default class TestNoteInput extends Component {
    render () {
        return (
            <div>
                <NoteInput
                    name="Test Input"
                    category="Title"></NoteInput>
            </div>
        )
    }
}