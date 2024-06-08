import Friend_card from './Friend_card/Friend_card'
import s from './Friends_list.module.css'


const Friends_list = (props) => {
    let friendsData = props.state.friends.map(friend => {
        return <Friend_card id={friend.id} name={friend.name} imgsrc={friend.imgsrc} />
    })

    return (
        <div className={s.container}>
            <div className={s.label}>
                <p>Друзья</p>
            </div>
            <div className={s.friendsList}>
                {friendsData}
            </div>
        </div>

    )
}

export default Friends_list;