import { createBoard } from '@wixc3/react-board';
import { PriceTag } from '../../../components/price-tag/price-tag';

export default createBoard({
    name: 'PriceTag',
    Board: () => <PriceTag name="Product Name" price={10} />,
});
