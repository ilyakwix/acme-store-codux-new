import classNames from 'classnames';
import styles from './App.module.scss';
import { Header } from './components/header/header';
import { ProductGrid } from './components/product-grid/product-grid';
import { Marquee } from './components/marquee/marquee';
import { BottomNavigation } from './components/bottom-navigation/bottom-navigation';
import { Footer } from './components/footer/footer';

function App() {
    return (
        <div className={styles.root}>
            <Header />
            <ProductGrid />
            <Marquee />
            <BottomNavigation />
            <Footer />
        </div>
    );
}

export default App;
