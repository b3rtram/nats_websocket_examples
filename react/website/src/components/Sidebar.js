
import React, { Component } from 'react';
import { NatsConnection, Payload } from 'nats.ws';
import './Sidebar.scss';

class Sidebar extends Component {

    constructor() {
        super();

        this.state = {
            messages: [],
            natsConn: {}
        };

        this.changeChannel = this.changeChannel.bind(this);
    }

    async componentDidMount() {

        let conn = await NatsConnection.connect({ url: 'wss://localhost:9222', payload: Payload.JSON })
        this.setState({ natsConn: conn })
    }

    changeChannel(channel) {
        console.log(channel);
    }

    addChannel() {
        console.log("add Channel");
    }

    render() {
        return (
            <div className="sidebarinternal">
                Channels
                <hr/>

                <ul>
                    <li><a href="#" onClick={() => this.changeChannel("common")}>common</a></li>
                    <li><a href="#" onClick={this.addChannel}>+</a></li>
                </ul>
            </div>
        )
    }

}

export default Sidebar