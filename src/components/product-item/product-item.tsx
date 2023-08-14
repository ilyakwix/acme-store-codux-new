import classNames from 'classnames';
import styles from './product-item.module.scss';
import { PriceTag } from '../price-tag/price-tag';

export interface ProductItemProps {
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductItem = ({ className, name, price, imageUrl }: ProductItemProps) => {
    return (
        <div className={classNames(styles.root, className)} style={{backgroundImage: `url('${imageUrl}')`}}>
            <PriceTag name={name} price={price} />
        </div>
    );
};
