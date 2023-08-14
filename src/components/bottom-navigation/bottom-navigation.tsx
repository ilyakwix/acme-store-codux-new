import classNames from 'classnames';
import styles from './bottom-navigation.module.scss';
import { Logo } from '../logo/logo';

export interface BottomNavigationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BottomNavigation = ({ className }: BottomNavigationProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <div className={styles.logoSection}>
                    <div className={styles.logoContainer}>
                        <Logo className={styles.logo} />
                    </div>
                    Acme Store{' '}
                </div>
                <div className={styles.navSection}>
                    <nav>
                        <ul className={styles.navList}>
                            <li>
                                <a href="/" className={styles.navLink}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/" className={styles.navLink}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/" className={styles.navLink}>
                                    Terms &amp; Conditions
                                </a>
                            </li>
                            <li>
                                <a href="/" className={styles.navLink}>
                                    Shipping &amp; Return Policy
                                </a>
                            </li>
                            <li>
                                <a href="/" className={styles.navLink}>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/" className={styles.navLink}>
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.deploySection}>
                    <button className={styles.deployButton}>
                        <span className={styles.arrowUp}>▲</span>
                        <span className={styles.buttonLabel}>Button</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
