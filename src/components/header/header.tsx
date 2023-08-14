import classNames from 'classnames';
import styles from './header.module.scss';
import { Logo } from '../logo/logo';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const cartIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1.5 2h.924a.75.75 0 0 1 .725.557l.255.958m0 0A40.076 40.076 0 0 1 14.428 4.74a39.723 39.723 0 0 1-1.95 4.759H5M3.404 3.515 5 9.5m0 0a2 2 0 0 0-2 2h10.5m-9.5 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm8.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
            />
        </svg>
    );

    const searchIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m14 14-3.465-3.465m0 0a5 5 0 1 0-7.07-7.07 5 5 0 0 0 7.07 7.07Z"
            />
        </svg>
    );

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.leftSideContainer}>
                <a href="/" className={styles.logoLink}>
                    <div className={styles.logoContainer}>
                        <Logo className={styles.logo} />
                    </div>
                    Acme Store
                </a>
                <nav>
                    <ul className={styles.navList}>
                        <li>All</li>
                        <li>Shirts</li>
                        <li>Stickers</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.searchContainer}>
                <input placeholder="Search for products..." className={styles.searchField} />
                <button className={styles.searchButton}>{searchIcon}</button>
            </div>
            <div className={styles.cartContainer}>
                <button className={styles.cartButton}>{cartIcon}</button>
            </div>
        </div>
    );
};
