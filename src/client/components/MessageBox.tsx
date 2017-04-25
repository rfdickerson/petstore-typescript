import * as React from 'react';

export interface MessageBoxProps { 
    code: number
    message: string 
}

export class MessageBox extends React.Component<MessageBoxProps, undefined> {

    render() {
        return (
            <div>
                <h1>Status code: {this.props.code}</h1>
                <p>{this.props.message}!</p>
            </div> )
    }
}