import HamburgerMenu from "./HamburgerMenu";
import Titlebar from "./Titlebar";
import * as React from "react";
import type { NavElementProps } from "../type/NavElementProps";

export default function Navigation({pageName}: NavElementProps) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <>
            <Titlebar pageName={pageName} setOpen={setMenuOpen} open={menuOpen} />
            <HamburgerMenu pageName={pageName} open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
}