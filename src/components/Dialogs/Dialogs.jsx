import Dialog_item from "./Dialog_item/Dialog_item";
import s from "./Dialogs.module.css";
import Message_item from "./Message_item/Message_item";

const Dialogs = (props) => {

    let dialogsData = [
        { id: "1", name: "Nikita", srcLink: "" },
        { id: "2", name: "Жижич", srcLink: "" },
        { id: "3", name: "Unknown", srcLink: "" },
        { id: "4", name: "Кошич", srcLink: "" },
        { id: "5", name: "Собаня", srcLink: "" },
        { id: "6", name: "Салоед", srcLink: "" }
    ];

    let messageData = [
        { id: "1", text: "aboba" },
        { id: "2", text: "Привчёдел" },
        { id: "3", text: "капуста" },
        { id: "4", text: "))))))" },
        { id: "5", text: "жижка" },
    ]

    let dialogElements = dialogsData.map(dialog => {
        return <Dialog_item id={dialog.id} name={dialog.name} srcLink={dialog.srcLink} />
    })

    let messageElements = messageData.map(message => {
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