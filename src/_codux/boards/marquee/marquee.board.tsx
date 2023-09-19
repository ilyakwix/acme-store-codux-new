import { createBoard } from '@wixc3/react-board';
import { Marquee } from '../../../components/marquee/marquee';

export default createBoard({
    name: '😀 Marquee',
    Board: () => <Marquee />,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
    },
});
