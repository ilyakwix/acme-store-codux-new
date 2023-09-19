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
                    imageUrl="https://static.wixstatic.com/media/f09b13_d756eb3bc78c4f2291771813dcc98a6e~mv2.png"
                />
                <ProductItem
                    name="Acme Baby Cap"
                    price={10}
                    imageUrl="https://static.wixstatic.com/media/f09b13_08c455c8a7104f47837179d471933f4a~mv2.png "
                />
                <ProductItem
                    name="Acme Mug"
                    price={15}
                    imageUrl="https://static.wixstatic.com/media/f09b13_1e9b7028ae134c888a95e769989b81ba~mv2.png"
                />
                <ProductItem
                    name="Acme Hoodie"
                    price={50}
                    imageUrl="https://static.wixstatic.com/media/f09b13_5e12933383fa4be381437fd12600929b~mv2.png"
                />
            </div>
        </div>
    );
};
