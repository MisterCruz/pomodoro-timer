import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
        <nav class="flex items-center justify-between flex-wrap bg-black p-6">
            <span class="font-semibold text-xl tracking-tight text-white">Pomo Timer</span>
        </nav>
        )
    }
}

export default Navbar;