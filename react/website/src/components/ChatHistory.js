
import React, { Component } from 'react';
import { NatsConnection, Payload } from 'nats.ws'


class ChatHistory extends Component {

    constructor() {
        super();

        this.state = {
            messages: []
        }
    }

    async componentDidMount() {

        let conn = await NatsConnection.connect({ url: 'wss://localhost:9222', payload: Payload.JSON })

        conn.subscribe('chat.OSCON2019.posts.*', (err, msg) => {
            console.log(msg.data);
            this.setState({messages: [...this.state.messages, msg.data]})
        });
    }

    render() {
        return (
            <div className="chathistory">
                    {
                        this.state.messages &&
                        this.state.messages.map((msg,i) => 
                            <div key={i}>{msg.text}</div>
                        )

                    }
            </div>
        )
    }

}

export default ChatHistory