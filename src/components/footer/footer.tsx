import classNames from 'classnames';
import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <span className={styles.leftSideContainer}>
                    <span>© 2023 ACME, Inc. All rights reserved.</span>
                    <div className={styles.divider} />
                    <span> Designed in California</span>
                </span>
                <span className={styles.rightSideContainer}>
                    Crafted by
                    <a href="/" className={styles.vercelLogo}>
                        ▲ Vercel
                    </a>
                </span>
            </div>
        </div>
    );
};
