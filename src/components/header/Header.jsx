import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

const menuLink = [
    { name: 'Home', path: '/' },
    { name: 'Add product', path: '/create' }
]

function Header() {

    return (
        <header className={styles.header}>

            <ul className={styles.header_links}>
                {menuLink.map((item, index) => (
                    <li key={index}>
                        <NavLink className={({ isActive }) => (isActive ? styles.active : styles.link)} to={item.path}>{item.name}</NavLink>
                    </li>
                ))}
            </ul >
        </header>
    );
}


export default Header; 