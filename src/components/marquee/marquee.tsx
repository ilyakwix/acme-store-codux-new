import classNames from 'classnames';
import styles from './marquee.module.scss';

export interface MarqueeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Marquee = ({ className }: MarqueeProps) => {
    return <div className={classNames(styles.root, className)}>Marquee</div>;
};
