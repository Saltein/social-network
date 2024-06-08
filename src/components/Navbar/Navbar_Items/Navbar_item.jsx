import s from "./Navbar_item.module.css";
import { NavLink } from "react-router-dom";

const Navbar_item = (props) => {
    return (
        <div className={s.item}>
            <img src={props.srclink}/>
            <NavLink to={props.hrefto} className={({ isActive }) => isActive ? s.active : ""}>{props.label}</NavLink>
        </div>
    )
} 

export default Navbar_item; 