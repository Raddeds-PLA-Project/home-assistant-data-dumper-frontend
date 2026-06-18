import MenuIcon from "@mui/icons-material/Menu";
import {
    Toolbar,
    AppBar,
    IconButton,
    Typography,
    Breadcrumbs
} from "@mui/material";
import type { NavElementProps } from "../type/appTypes/NavElementProps";
import type { OpenCloserProps } from "../type/appTypes/OpenCloserProps";

export default function Titlebar({open, setOpen, pageName}: OpenCloserProps & NavElementProps) {
    return <AppBar position="static">
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setOpen(!open)}
            >
                <MenuIcon />
            </IconButton>
            <Breadcrumbs sx={{ color: "inherit" }}>
                <Typography variant="h6" color="inherit">
                    Data Dumper
                </Typography>
                <Typography variant="h6" color="inherit">
                    {pageName}
                </Typography>
            </Breadcrumbs>
        </Toolbar>
    </AppBar>
}