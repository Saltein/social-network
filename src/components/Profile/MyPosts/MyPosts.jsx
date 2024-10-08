import s from "./MyPosts.module.css";
import Post_create from "./Post_create/Post_create";
import { Post } from "./Posts/Post";

export function MyPosts(props) {
    debugger;
    let postElements = props.postsData.map(post => {
        return <Post id={post.id} nickname={post.nickname} likesCount={post.likesCount} repostsCount={post.repostsCount} text={post.text} avatarSrc={post.avatarSrc}/>
    }).reverse()

    return (
        <div>
            <Post_create dispatch={props.dispatch} />
            <div>
                {postElements}
            </div>
        </div>
    )
}