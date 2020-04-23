
import React, { Component } from 'react';
import './Topbar.scss'

class Topbar extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    onLogin() {

        this.props.onLogin()

    }

    render() {
        return (
            <div className="topbar z-depth-1">
                <a href="#" data-target="slide-out" className="sidenav-trigger hide-on-large-only"><i className="material-icons">menu</i></a>
                <a href="/" className="logo-text hide-on-small-only">Nats Messenger</a>
                <div className="story-title"></div>
                <div className="middle">
                </div>
            </div>
        )
    }

}

export default Topbar