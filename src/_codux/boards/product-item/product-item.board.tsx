import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../components/product-item/product-item';

export default createBoard({
    name: 'ProductItem',
    Board: () => (
        <ProductItem
            name="Acme Circles T-Shirt"
            price={20}
            imageUrl="https://images.unsplash.com/photo-1658988958556-72342117610f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        />
    ),
    environmentProps: {
        canvasWidth: 576,
        canvasHeight: 322,
    },
});
