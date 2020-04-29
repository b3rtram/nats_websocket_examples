
import React, { Component } from 'react';
import { NatsConnection, Payload } from 'nats.ws'
import './Chat.scss'

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
                <textarea placeholder="" id="first_name" type="text" className="chatInput"/>
                <button className="send">send</button>
            </div>
        )
    }

}

export default Chat