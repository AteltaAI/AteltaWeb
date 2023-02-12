import React from 'react'
import Countdown from 'react-countdown'
import './CountDown.css'

function CountDown({begin, setBegin, setAutoplay}) {

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            setBegin(false)
            setAutoplay(true)
        } else {
            setAutoplay(false)
            return <span className='count-text'>{seconds}</span>
        }
    };

    return (
        <div className='count-cont'>
            <Countdown date={(Date.now()) + 3000} renderer={renderer}/>
        </div>
        )
    }

export default CountDown