import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../components/product-item/product-item';

export default createBoard({
    name: 'ProductItem',
    Board: () => (
        <ProductItem
            name="Acme Circles T-Shirt"
            price={20}
            imageUrl="https://static.wixstatic.com/media/f09b13_5e12933383fa4be381437fd12600929b~mv2.png"
        />
    ),
    environmentProps: {
        canvasWidth: 576,
        canvasHeight: 322,
    },
});
