import s from "./Navbar.module.css";
import Navbar_item from "./Navbar_Items/Navbar_item";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <Navbar_item label="Профиль" hrefto="/profile" srclink="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Download.png" />
            <Navbar_item label="Диалоги" hrefto="/dialogs" srclink="https://static.vecteezy.com/system/resources/thumbnails/011/654/887/small/speech-bubbles-on-transparent-background-chat-box-or-chat-vector-square-and-doodle-message-or-communication-icon-cloud-speaking-for-comics-and-minimal-message-dialog-free-png.png" />
            <Navbar_item label="Новости" hrefto="/news" srclink="https://cdn-icons-png.flaticon.com/512/4363/4363382.png" />
            <Navbar_item label="Музыка" hrefto="/music" srclink="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png" />
            <Navbar_item label="Настройки" hrefto="/settings" srclink="https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png" />
        </nav>
    )
}

export default Navbar;