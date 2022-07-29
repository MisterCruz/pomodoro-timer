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
        let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
        audio.play();
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
            if (timeLeft < 0) {
                this.setState({ isStarted: false })
            }
        }, 1000)
    }

    /*
    pause() {
        let time = new Date(new Date().getTime() + this.state.minutes * 60000)
        let now = new Date().getTime();
        let timeLeft = time - now;
        this.setState({ 
            minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeLeft % (1000 * 60)) / 1000)
        })
    }*/

    render() {
        return (
            <div className="bg-slate-500 w-[200px] container mx-auto content-center justify-center items-center">
                <h1 className="text-3xl font-bold py-10 text-white"> Pomodoro Timer </h1>
                
                {this.state.isStarted ? 
                <div className="content-center w-[200px] h-[200px] rounded-full border-3 flex p-3 relative bg-gray-400 justify-center items-center">
                    <p className="text-3xl font-bold pt-2 pb-3 text-black"> {this.state.minutes} : {this.state.seconds}</p> 
                </div> 
                : null}
                { this.state.isStarted ? <p className="text-2xl font-bold pt-2 pb-8 text-white">Work time 🚧 🛠 </p> : null }
                {/*{ this.state.isStarted ? <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">Pause Timer</button> : null} */}
                {this.state.isStarted ? null : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" 
                onClick={this.countDown}>Start timer</button>}
            </div>
        )
    }
}
export default Pom;