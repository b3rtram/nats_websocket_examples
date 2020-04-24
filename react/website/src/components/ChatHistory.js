
import React, { Component } from 'react';
import NatsConnection from 'nats.ws'


class ChatHistory extends Component {

    constructor() {
        super();

        this.state = {
            messages: []
        }
    }

    async componentDidMount() {
        let conn = await NatsConnection.connect({ url: 'wss://localhost:9222', payload: nats.Payload.JSON })

        conn.subscribe('newMessages', (err, msg) => {
            console.log(msg.data);
            this.setState({messages: [...this.state.messages, msg.data]})
        });
    }

    render() {
        return (
            <div>
                    {
                        this.state.messages &&
                        this.state.messages.map((msg) => {
                            <span>{msg.text}</span>
                        })

                    }
            </div>
        )
    }

}

export default ChatHistory