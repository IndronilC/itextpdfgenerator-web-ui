import React, { Component } from 'react';

class HeaderComponents extends Component {
    render() {
        return (
            <div>
                 <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://kanini.com/" className="navbar-brand">Customer Management App</a></div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponents;