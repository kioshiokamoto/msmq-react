import React, { useState } from 'react'
import {
    NavLink
  } from "react-router-dom";
import '../styles/navbar.css'
import VIcon from './VIcon/VIcon'
import { Button,Text,  } from "@chakra-ui/react"
export default function Navbar() {
    // const [activeIcon, setActiveIcon] = useState(false)
    return (
        <nav className="navbar-container">
            <div className="navbar-wrapper">
                <VIcon name="logodemo1" size={150}/>
                <ul className="nav-list">
                    <li className="nav-item-container">
                        <NavLink exact to="/" className="nav-item" activeClassName="active-nav"> <VIcon name="cart" color="terciary"size={25}/><Text fontSize="xl" ml="2">Ingreso de stock</Text></NavLink>
                    </li>
                    <li className="nav-item-container">
                        <NavLink exact to="/pageTwo" className="nav-item" activeClassName="active-nav"> <VIcon name="dashboard" color="terciary"size={20}/><Text fontSize="xl" ml="2">Reporte de cierre</Text></NavLink>
                    </li>
                    <li className="nav-item-container">
                        <NavLink exact to="/pageThree" className="nav-item" activeClassName="active-nav"><VIcon name="products" color="terciary"size={20}/><Text fontSize="xl" ml="2">Reporte general</Text></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
