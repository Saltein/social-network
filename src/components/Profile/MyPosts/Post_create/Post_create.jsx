import s from "./Post_create.module.css";
import sCom from "./../MyPostsCommon.module.css";
import MyPosts_button from "../MyPosts_button/MyPosts_button";
import React from "react";

const Post_create = (props) => {
    debugger;
    let postMessage_ref = React.createRef();

    return (
        <div className={`${s.input_block} ${sCom.post_item}`}>
            <div className={s.label}>
                <p>Что нового у вас сегодня?</p>
            </div>

            <div className={s.input_div}>
                <input ref={postMessage_ref} />
            </div>

            <MyPosts_button text='Post' reference={postMessage_ref} func={props.createPost} />
        </div>
    )
}

export default Post_create;