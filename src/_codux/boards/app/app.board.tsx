import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1200,
        windowHeight: 800,
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
    },
});
