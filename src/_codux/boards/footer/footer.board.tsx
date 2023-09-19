import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    environmentProps: {
        windowWidth: 1400,
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
    },
    isSnippet: true,
});
