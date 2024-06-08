import Dialog_item from "./Dialog_item/Dialog_item";
import s from "./Dialogs.module.css";
import Message_item from "./Message_item/Message_item";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map(dialog => {
        return <Dialog_item id={dialog.id} name={dialog.name} srcLink={dialog.srcLink} />
    })

    let messageElements = props.state.messageData.map(message => {
        return <Message_item id={message.id} text={message.text} />
    })

    return (
        <div className={s.dialog_page}>
            <div className={s.dialog_items}>
                {dialogElements}
            </div>

            <div className={s.message_items}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;