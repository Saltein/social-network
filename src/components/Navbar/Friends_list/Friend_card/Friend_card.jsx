import s from './Friend_card.module.css'


const Friend_card = (props) => {
    return (
        <div className={s.friendCard}>
            <img src={props.imgsrc} />
            <p>{props.name}</p>
        </div>
    )
}

export default Friend_card;