import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import Profile_info from "./Profile_info/Profile_info";

const Profile = (props) => {
    debugger;
    return (
        <div className={s.content}>
            <Profile_info state={props.state.profileInfo}/>
            <MyPosts postsData={props.state.postsData} createPost={props.createPost} />
        </div>
    )
}

export default Profile;