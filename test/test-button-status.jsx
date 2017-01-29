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
                <Button 
                        status="issue"
                        title="Issue">Issue
                 </Button>
                <Button 
                        status="fatal"
                        icon="fa fa-bus"></Button>
                <Button 
                        status="unknown"
                        icon="fa fa-map"></Button>
                <Button 
                        status="prompt"
                        loading={ true }>
                </Button>
                <Button 
                        status="alert"
                        icon="fa fa-plus-circle"
                        notice="This is a notice">
                </Button>
                <Button 
                        status="activated"
                        notice="This is a notice.">Activated</Button>
                <Button 
                        status="deactivated"
                        icon="fa fa-home">Deactivated</Button>
            </div>
        )
    }
}