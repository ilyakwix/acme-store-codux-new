import classNames from 'classnames';
import styles from './marquee.module.scss';
import { ProductItem } from '../product-item/product-item';

export interface MarqueeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Marquee = ({ className }: MarqueeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <ProductItem
                    name="Acme Baby Onesie"
                    price={10}
                    imageUrl="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1335&amp;q=80"
                />
                <ProductItem
                    name="Acme Baby Cap"
                    price={10}
                    imageUrl="https://images.unsplash.com/photo-1690914913845-3863dbd15a9a?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2148&amp;q=80"
                />
                <ProductItem
                    name="Acme Mug"
                    price={15}
                    imageUrl="https://images.unsplash.com/photo-1691200007743-0652bbbc1d7d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1335&amp;q=80"
                />
                <ProductItem
                    name="Acme Hoodie"
                    price={50}
                    imageUrl="https://plus.unsplash.com/premium_photo-1666666222364-7479e7347833?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=987&amp;q=80"
                />
            </div>
        </div>
    );
};
