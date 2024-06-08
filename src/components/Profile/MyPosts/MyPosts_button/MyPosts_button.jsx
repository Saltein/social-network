import s from './MyPosts_button.module.css'


const MyPosts_button = (props) => {
    return (
        <button className={s.button}>
            <a> {props.text} {props.count != 0 ? props.count : ''}</a>
        </button>
    )
}

export default MyPosts_button;