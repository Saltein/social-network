import s from "./Post_create.module.css";
import sCom from "./../MyPostsCommon.module.css";
import MyPosts_button from "../MyPosts_button/MyPosts_button";

const Post_create = (props) => {
    return (
        <div className={`${s.input_block} ${sCom.post_item}`}>
            <div className={s.label}>
                <p>Что нового у вас сегодня?</p>
            </div>

            <div className={s.input_div}>
                <input></input>
            </div>

            <MyPosts_button text='Post' />
        </div>
    )
}

export default Post_create;