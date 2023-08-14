import { createBoard } from '@wixc3/react-board';
import { Logo } from '../../../components/logo/logo';

export default createBoard({
    name: 'Logo',
    Board: () => <Logo />,
    environmentProps: {
        canvasWidth: 176,
    },
});
