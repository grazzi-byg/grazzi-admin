/* eslint-disable react/prop-types */
import './Layout.css';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="layout-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
