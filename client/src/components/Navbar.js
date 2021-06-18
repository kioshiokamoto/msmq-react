import React from 'react'
import {
    Link
  } from "react-router-dom";
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">PageOne</Link>
                </li>
                <li>
                    <Link to="/pageTwo">PageTwo</Link>
                </li>
            </ul>
        </nav>
    )
}
