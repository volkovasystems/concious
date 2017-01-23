import React, { Component } from 'react';


export default class TestButtonStatus extends Component {
    render() {
        return (
            <div>
                <Button 
                        status="success"
                        title="Status"
                        notice="This is success"
                        >Success
                </Button>
                <Button 
                        status="failed"
                        icon="fa fa-home">
                </Button>
                <Button 
                        loading={ true }>
                </Button>
                <Button status="issue">Issue</Button>
                <Button status="fatal">Fatal</Button>
                <Button status="unknown">Unknown</Button>
                <Button status="prompt">Prompt</Button>
                <Button status="alert">Alert</Button>
                <Button status="activated">Activated</Button>
                <Button status="deactivated">Deactivated</Button>
            </div>
        )
    }
}