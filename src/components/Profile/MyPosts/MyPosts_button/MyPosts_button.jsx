import s from './MyPosts_button.module.css'
import React from 'react'


const MyPosts_button = (props) => {
    debugger;
    
    let buttonFunc = () => {
        let text = props.reference.current.value;
        props.func(text);
    }

    return (
        <button className={s.button} onClick={buttonFunc}>
            <span> {props.text} {props.count != 0 ? props.count : ''}</span>
        </button>
    )
}

export default MyPosts_button;