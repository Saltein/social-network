import s from './Message_item.module.css';

const Message_item = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}

export default Message_item;