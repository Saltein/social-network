import s from "./Post.module.css"
import sCom from "./../MyPostsCommon.module.css";

export function Post(props) {
    return (
        <div className={`${s.postBody} ${sCom.post_item}`}>
            <div className={s.ava_nick}>
                <img src="https://sun9-83.userapi.com/impg/IpH272nhUhEx52c4AXkLHcQMpdsZsYH1n8p_Ng/W1qdfwqIqn4.jpg?size=1080x1049&quality=95&sign=781d343a4e5337711c3d4177688e6af3&c_uniq_tag=6eEWvFQQErhuNRht6Fy3hTYiYbI5CnqblALaf45tICI&type=album" />
                <a>
                    {props.nickname}
                </a>
            </div>

            <p>
                {props.text}
            </p>

            <div className={s.buttonContainer}>
                <button>
                    <a>Like {props.likesCount != 0 ? props.likesCount : ''}</a>
                </button>
                <button>
                    <a>Repost {props.repostsCount != 0 ? props.repostsCount : ''}</a>
                </button>
            </div>

        </div>
    )
}