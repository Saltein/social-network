import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import Profile_info from "./Profile_info/Profile_info";

const Profile = () => {
    return (
        <div className={s.content}>
            <Profile_info />
            <MyPosts />
        </div>
    )
}

export default Profile;