import React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
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
