import { createBoard } from '@wixc3/react-board';
import { ProductGrid } from '../../../components/product-grid/product-grid';

export default createBoard({
    name: 'ProductGrid',
    Board: () => <ProductGrid />
});
