import { useEffect, useState } from "react";
import BackToTop from '../elements/BackToTop';
import Breadcrumb from './Breadcrumb';
import PageHead from './PageHead';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Footer3 from "./footer/Footer3";
import Header1 from "./header/Header1";
import Header2 from './header/Header2';

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, headerCls }) {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenu, setMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("wsactive") : document.body.classList.remove("wsactive");
    }

    useEffect(() => {
        const WOW = require('wowjs');

        // Initialize WOW.js for desktop
        window.wowDesktop = new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false, // Disable for desktop
            live: true
        });

        // Initialize WOW.js for mobile
        window.wowMobile = new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: true
        });

        // Initializations
        window.wowDesktop.init();
        window.wowMobile.init();

        // Scroll event listener
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    // Additional useEffect to handle mobile visibility issue
    useEffect(() => {
        // Ensure that WOW.js for mobile is re-initialized after a state change
        window.wowMobile.init();
    }, [isMobileMenu]);

    useEffect(() => {
        const WOW = require('wowjs');
        window.wowMobile = new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: true
        });
        window.wowMobile.init();
    }, [isMobileMenu]);

    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="page" className="page font--jakarta">
                {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} />}
                {headerStyle === 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} /> : null}
                {headerStyle === 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} headerCls={headerCls} /> : null}

                <main className="main">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                    {children}
                </main>

                {!footerStyle && <Footer1 />}
                {footerStyle === 1 ? <Footer1 /> : null}
                {footerStyle === 2 ? <Footer2 /> : null}
                {footerStyle === 3 ? <Footer3 /> : null}

                <BackToTop />
            </div>
        </>
    );
}
