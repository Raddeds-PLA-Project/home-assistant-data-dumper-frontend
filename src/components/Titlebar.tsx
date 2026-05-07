import Toolbar from "@mui/material/Toolbar";
import HamburgerMenu from "./HamburgerMenu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import * as React from "react";

export default function Titlebar() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setMenuOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Page Name Here
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
}