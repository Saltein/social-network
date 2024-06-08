import s from "./Profile_info.module.css";

const Profile_info = (props) => {
    return (
        <div>
            <div className={s.profileBackground}>
                <img src='https://thypix.com/wp-content/uploads/sad-cat-1.png'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default Profile_info;