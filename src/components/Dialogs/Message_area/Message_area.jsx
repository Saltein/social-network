import s from "./Message_area.module.css";
import React from "react";

const Message_area = (props) => {

    let textarea_ref = React.createRef();

    let send_message = () => {
        let text = textarea_ref.current.value;
        alert(text);
    }

    return(
        <div className={s.message_area}>
            <button className={s.buttons}>В</button>
            <textarea ref={textarea_ref}></textarea>
            <button className={s.buttons} onClick={send_message}>О</button>
        </div>
    )
}

export default Message_area;