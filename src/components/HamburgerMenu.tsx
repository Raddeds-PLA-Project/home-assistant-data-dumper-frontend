import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import * as React from 'react';

export default function HamburgerMenu() {

    const [open, setOpen] = React.useState(true);

    return (
        <>
            <Button onClick={()=>{setOpen(true)}}>Open Drawer</Button>
            <Drawer open={open} onClose={()=>{setOpen(false)}}>
                <p>This is a navigation drawer!</p>
            </Drawer>
        </>
    )
}