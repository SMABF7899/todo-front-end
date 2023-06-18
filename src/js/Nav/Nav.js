import React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import logo from '../../assets/TODO.png';
import '../../css/Form.css'
import NavBrowserView from "./NavBrowserView";
import NavMobileView from "./NavMobileView";

function Nav() {
    return (
        <>
            <BrowserView>
                <NavBrowserView/>
            </BrowserView>
            <MobileView>
                <NavMobileView/>
            </MobileView>
        </>
    );
}

export default Nav;
