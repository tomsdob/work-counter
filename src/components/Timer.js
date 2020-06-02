import React, { Component } from 'react'
export default class Timer extends Component {
    state = {
        hours: 4,
        minutes: 10,
        seconds: 0,
    }
    render() {
        const { hours, minutes, seconds } = this.state
        return (
            <div className="text-center">
                <h1 className="text-2xl font-semibold leading-none text-gray-800">Time at work:</h1>
                <p className="mt-3 text-base font-normal leading-none text-gray-800">{ hours }h { minutes }min { seconds < 10 ? `0${ seconds }` : seconds }s</p>
            </div>
        )
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if(this.state.seconds === 60 ){
                this.setState( ({ seconds }) => ({
                    seconds: 0
                }))
            } else {
                this.setState( ({ seconds }) => ({
                    seconds: seconds + 1
                }))
            }
            if(this.state.seconds % 60 === 0 && this.state.seconds > 0){
                this.setState( ({ minutes }) => ({
                    minutes: minutes + 1
                }))
            }
            if(this.state.minutes % 60 === 0 && this.state.seconds % 60 === 0 && this.state.minutes > 0){
                this.setState( ({ hours }) => ({
                    hours: hours + 1
                }))
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}
