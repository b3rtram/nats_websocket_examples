
import React, { Component } from 'react';
import { NatsConnection, Payload } from 'nats.ws'

class Chat extends Component {

    constructor() {
        super();

        this.state = {
            messages: [],
            natsConn: {}
        }

        this.sendMessage = this.sendMessage.bind(this);
    }

    async componentDidMount() {

        let conn = await NatsConnection.connect({ url: 'wss://localhost:9222', payload: Payload.JSON })
        this.setState({ natsConn: conn })
    }

    sendMessage(event) {

        this.state.natsConn.publish('newMessage', { text: event.value })


    }

    render() {
        return (
            <div className="chat">
                <input placeholder="Placeholder" id="first_name" type="text" />
                <label for="first_name">First Name</label>
            </div>
        )
    }

}

export default Chat