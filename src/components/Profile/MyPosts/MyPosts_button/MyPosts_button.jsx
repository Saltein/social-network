import s from './MyPosts_button.module.css'
import React from 'react'


const MyPosts_button = (props) => {
    let create_new_post = () => {
        let text = props.reference.current.value;
        props.createPost(text);
    }

    return (
        <button className={s.button} onClick={create_new_post}>
            <span> {props.text} {props.count != 0 ? props.count : ''}</span>
        </button>
    )
}

export default MyPosts_button;