import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.wideCat}>
                <img src='https://thypix.com/wp-content/uploads/sad-cat-1.png'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;