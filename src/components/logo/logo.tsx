import classNames from 'classnames';
import styles from './logo.module.scss';

export interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <svg className={classNames(styles.root, className)} viewBox="0 0 16 14">
            <path
                fill="#000"
                fillRule="evenodd"
                d="m8 0 2.788 4.879L5.813 14H0L8 0Zm2.37 14 2.75-5.042L16 14h-5.63Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
