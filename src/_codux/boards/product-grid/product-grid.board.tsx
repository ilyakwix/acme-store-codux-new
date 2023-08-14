import { createBoard } from '@wixc3/react-board';
import { ProductGrid } from '../../../components/product-grid/product-grid';

export default createBoard({
    name: 'ProductGrid',
    Board: () => <ProductGrid />,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
        windowWidth: 1600,
    },
});
