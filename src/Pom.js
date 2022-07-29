import React, { Component } from 'react' 

class Pom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: null,
            hours: null,
            minutes: null,
            seconds: null,
            isStarted: false
        }
        this.countDown = this.countDown.bind(this);
    }

    
    countDown() {
        let time = new Date(new Date().getTime() + 25 * 60000)
        setInterval(() => {
            let now = new Date().getTime();
            let timeLeft = time - now;
            this.setState({ days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
                hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
                isStarted: true
            })
        }, 1000)
    }

    render() {
        return (
            <div className="bg-slate-500">
                <h1 className="text-3xl font-bold py-10 text-white"> Pomodoro Timer </h1>
                {this.state.isStarted ? <p className="text-3xl font-bold py-4 text-white"> {this.state.minutes} : {this.state.seconds}</p> : null}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={this.countDown}>Start timer</button>
            </div>
        )
    }
}
export default Pom;