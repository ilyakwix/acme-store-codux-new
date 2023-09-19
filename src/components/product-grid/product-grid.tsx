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
                    imageUrl="https://static.wixstatic.com/media/f09b13_f5849797853c4e5fa658942101cc1504~mv2.png"
                />
                <ProductItem
                    name="Acme Drawstring Bag"
                    price={12}
                    imageUrl="https://static.wixstatic.com/media/f09b13_814dbe159beb43f08ea5b839749eaad8~mv2.png"
                />
                <ProductItem
                    name="Acme Cup"
                    price={15}
                    imageUrl="https://static.wixstatic.com/media/f09b13_ae474c3e957a4e728bac277823bf1b88~mv2.png"
                />
            </div>
        </div>
    );
};
