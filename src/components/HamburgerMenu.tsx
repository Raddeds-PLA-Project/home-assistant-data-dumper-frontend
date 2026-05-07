import Drawer from "@mui/material/Drawer"
import type { OpenCloseProps } from "../type/OpenClose";

export default function HamburgerMenu({ open, onClose }: OpenCloseProps) {

    return (
        <>
            <Drawer open={open} onClose={onClose}>
                <p>This is a navigation drawer!</p>
            </Drawer>
        </>
    )
}