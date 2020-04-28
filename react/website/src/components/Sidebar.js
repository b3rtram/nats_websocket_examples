
import React, { Component } from 'react';
import { NatsConnection, Payload } from 'nats.ws'

class Sidebar extends Component {

    constructor() {
        super();

        this.state = {
            messages: [],
            natsConn: {}
        }

    }

    async componentDidMount() {

        let conn = await NatsConnection.connect({ url: 'wss://localhost:9222', payload: Payload.JSON })
        this.setState({ natsConn: conn })
    }

    render() {
        return (
            <div className="sidebar">
                SideBar
            </div>
        )
    }

}

export default Sidebar