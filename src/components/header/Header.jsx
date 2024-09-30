import styles from './header.module.css';
import IconLogo from '../../icons/IconLogo';
import UserIcon from '../../icons/UserIcon';
import avatarImage from '../../assets/images/image-avatar.png';
import { NavLink } from 'react-router-dom';

const menuLink = [
    { name: 'Home', path: '/' },
    { name: 'Add product', path: '/create' }
]

function Header() {

    return (
        <header className={styles.header}>
            <NavLink to={'/'}><IconLogo /></NavLink>
            <ul className={styles.header_links}>
                {menuLink.map((item, index) => (
                    <li key={index}>
                        <NavLink className={({ isActive }) => (isActive ? styles.active : styles.link)} to={item.path}>{item.name}</NavLink>
                    </li>
                ))}
            </ul >
            <span className={styles.container_user}>
                <UserIcon
                    image={avatarImage}
                    className={styles.user_icon}
                />
            </span>

        </header>
    );
}


export default Header; 