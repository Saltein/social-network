import s from './Dialog_item.module.css';
import { NavLink } from "react-router-dom";

const Dialog_item = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={s.link}>
                <img src={props.srcLink} />
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}

export default Dialog_item;