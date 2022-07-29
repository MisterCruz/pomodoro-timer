import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
            <span className="font-semibold text-xl tracking-tight text-white">Pomodoro Timer  <span className="p-1"> 🍅 </span> </span>
        </nav>
        )
    }
}

export default Navbar;