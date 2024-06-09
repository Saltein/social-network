import s from "./Post.module.css"
import sCom from "./../MyPostsCommon.module.css";
import MyPosts_button from "../MyPosts_button/MyPosts_button";

export function Post(props) {
    return (
        <div className={`${s.postBody} ${sCom.post_item}`}>
            <div className={s.ava_nick}>
                <img src={props.avatarSrc} />
                <a>
                    {props.nickname}
                </a>
            </div>

            <p>
                {props.text}
            </p>

            <div className={s.buttonContainer}>
                <MyPosts_button text="Like" count={props.likesCount} />
                <MyPosts_button text="Repost" count={props.repostsCount} />
            </div>

        </div>
    )
}