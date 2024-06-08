import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialog_page}>
            <div className={s.dialog_items}>
                <div className={s.dialog + ' ' + s.active}>
                    <img src="https://sun9-83.userapi.com/impg/IpH272nhUhEx52c4AXkLHcQMpdsZsYH1n8p_Ng/W1qdfwqIqn4.jpg?size=1080x1049&quality=95&sign=781d343a4e5337711c3d4177688e6af3&c_uniq_tag=6eEWvFQQErhuNRht6Fy3hTYiYbI5CnqblALaf45tICI&type=album" />
                    Nikita
                </div>
                <div className={s.dialog}>
                    <img src="https://sun9-83.userapi.com/impg/IpH272nhUhEx52c4AXkLHcQMpdsZsYH1n8p_Ng/W1qdfwqIqn4.jpg?size=1080x1049&quality=95&sign=781d343a4e5337711c3d4177688e6af3&c_uniq_tag=6eEWvFQQErhuNRht6Fy3hTYiYbI5CnqblALaf45tICI&type=album" />
                    Unknown
                </div>
            </div>

            <div className={s.message_items}>
                <div className={s.message}>
                    hi
                </div>
                <div className={s.message}>
                    hello
                </div>
            </div>
        </div>
    )
}

export default Dialogs;