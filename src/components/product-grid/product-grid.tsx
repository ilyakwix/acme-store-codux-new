import classNames from 'classnames';
import styles from './product-grid.module.scss';
import { ProductItem } from '../product-item/product-item';

export interface ProductGridProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProductGrid = ({ className }: ProductGridProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <ProductItem
                    name="Acme Circles T-Shirt"
                    price={20}
                    className={styles.emphasizedProductItem}
                    imageUrl="https://images.unsplash.com/photo-1658988958556-72342117610f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80"
                />
                <ProductItem
                    name="Acme Drawstring Bag"
                    price={12}
                    imageUrl="https://images.unsplash.com/photo-1691083525349-c22d4dd2d567?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2664&amp;q=80"
                />
                <ProductItem
                    name="Acme Cup"
                    price={15}
                    imageUrl="https://images.unsplash.com/photo-1691256853764-f9917b70e5e5?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2664&amp;q=80"
                />
            </div>
        </div>
    );
};
