import s from "./Post_create.module.css";
import sCom from "./../MyPostsCommon.module.css";

const Post_create = (props) => {
    return (
        <div className={`${s.input_block} ${sCom.post_item}`}>
            <input></input>
            <button>
                <a>Post</a>
            </button>
        </div>
    )
}

export default Post_create;