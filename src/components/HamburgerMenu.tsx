import Drawer from "@mui/material/Drawer"
import type { OpenCloseProps } from "../type/OpenCloseProps";
import type { NavElementProps } from "../type/NavElementProps";

export default function HamburgerMenu({ open, onClose, pageName }: OpenCloseProps & NavElementProps) {

    return (
        <>
            <Drawer open={open} onClose={onClose}>
                <p>This is a navigation drawer!</p>
                <p>The current page is {pageName}</p>
            </Drawer>
        </>
    )
}