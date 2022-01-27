import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <a className="navbar-brand" href="/" >React project</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarContent"
                    area-controls="navbarContent"
                    area-expanded="false">

                    <span className="navbar-toggler-icon" ></span>
                </button>

                <div className="collase navbar-collapse" id="navbarContent" >
                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item" >
                            <Link className="nav-link" to="/introduction" >Introduction</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/imc" >IMC calculator</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/cashmachine" >Cash Machine</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/contacts" >Contacts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}