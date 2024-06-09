import s from "./Profile_info.module.css";

const Profile_info = (props) => {
    return (
        <div className={s.profileContainer}>
            <div className={s.profileImageDiv}>
                <img src={props.state[0].profileBackgroundSrc}></img>
            </div>
            <div className={s.profileInfo}>
                <div className={s.avatarDiv}>
                    <img src={props.state[0].avatarSrc}></img>
                </div>
                <div className={s.descriptionBlock}>
                    <span>
                        {props.state[0].name}
                    </span>
                    <p>
                        {props.state[0].status}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile_info;