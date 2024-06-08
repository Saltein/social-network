import s from "./MyPosts.module.css";
import Post_create from "./Post_create/Post_create";
import { Post } from "./Posts/Post";

export function MyPosts() {

    let postsData = [
        { id: "1", nickname: "jijka bobra", likesCount: 25, repostsCount: 4, text: "Евгений Александрович Кустолян" },
        { id: "2", nickname: "bobr kurva", likesCount: 12, repostsCount: 0, text: "Амогус как так" },
        { id: "3", nickname: "just a cat", likesCount: 3, repostsCount: 1, text: "капуста вкусная" },
        { id: "4", nickname: "Жоский крот", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
    ]

    let postElements = postsData.map(post => {
        return <Post id={post.id} nickname={post.nickname} likesCount={post.likesCount} repostsCount={post.repostsCount} text={post.text} />
    })

    return (
        <div>
            <Post_create />
            <div>
                {postElements}
            </div>
        </div>
    )
}