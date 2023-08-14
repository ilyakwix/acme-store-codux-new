import classNames from 'classnames';
import styles from './price-tag.module.scss';

export interface PriceTagProps {
    name: string;
    price: number;
    className?: string;
}

export const PriceTag = ({ className, name, price }: PriceTagProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>${price} USD</span>
        </div>
    );
};
