import s from './Dialog_item.module.css';
import { NavLink } from "react-router-dom";

const Dialog_item = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={props.srcLink} />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog_item;