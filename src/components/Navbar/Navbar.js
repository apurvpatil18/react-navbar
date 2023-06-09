import React, { Component } from 'react';
import { MenuItems } from './MenuItem';
import './Navbar.css'

 class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked})
    }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 
        className="navbar-logo">React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClicked={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

        </div>
        <ul className={this.state.clicked}>
            {MenuItems.map((item, index) => {
                return (
                    <li key = {index}>
                        <a className={MenuItems.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
           
        </ul>
      </nav>
    )
  }
}

export default Navbar