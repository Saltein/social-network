import s from "./Post_create.module.css";
import sCom from "./../MyPostsCommon.module.css";

const Post_create = (props) => {
    return (
        <div className={`${s.input_block} ${sCom.post_item}`}>
            <div className={s.label}>
                <p>Что нового у вас сегодня?</p>
            </div>

            <div className={s.input_div}>
                <input></input>
            </div>

            <button>
                <a>Post</a>
            </button>
        </div>
    )
}

export default Post_create;