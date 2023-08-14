import { createBoard } from '@wixc3/react-board';
import { BottomNavigation } from '../../../components/bottom-navigation/bottom-navigation';

export default createBoard({
    name: 'BottomNavigation',
    Board: () => <BottomNavigation />,
    environmentProps: {
        windowWidth: 1400,
        canvasMargin: {
            left: 0,
            right: 0,
        },
    },
});
