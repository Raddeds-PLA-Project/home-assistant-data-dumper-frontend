import MenuIcon from "@mui/icons-material/Menu";
import {
    Toolbar,
    AppBar,
    IconButton,
    Typography,
    Breadcrumbs
} from "@mui/material";
import type { NavElementProps } from "../type/NavElementProps";
import type { OpenCloserProps } from "../type/OpenCloserProps";

export default function Titlebar({setOpen, pageName}: OpenCloserProps & NavElementProps) {
    return <AppBar position="static">
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setOpen(true)}
            >
                <MenuIcon />
            </IconButton>
            <Breadcrumbs sx={{ color: "inherit" }}>
                <Typography variant="h6" color="inherit">
                    Radded's Home Assistant Data Dumper
                </Typography>
                <Typography variant="h6" color="inherit">
                    {pageName}
                </Typography>
            </Breadcrumbs>
        </Toolbar>
    </AppBar>
}