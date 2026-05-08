import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    ListItemIcon,
    ListItemButton
} from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import HistoryIcon from '@mui/icons-material/History';
import {useNavigate} from "react-router";
import type { OpenCloseProps } from "../type/OpenCloseProps";
import type { NavElementProps } from "../type/NavElementProps";
import type { MobileProps } from "../type/MobileProps";

export default function HamburgerMenu({ open, onClose, pageName, isMobile }: OpenCloseProps & NavElementProps & MobileProps) {
    const navigate = useNavigate();

    const DrawerList = (<>
        <Box sx={{width: 250}} role="presentation">
            <Typography sx={{m:2, textAlign:"center"}} variant="h6" >Radded's Home Assistant Data Dumper</Typography>
            <List>
                <ListItemButton selected={pageName == "Status"} onClick={()=>{navigate("/")}}>
                    <ListItem key="Status">
                        <ListItemIcon>
                            <HistoryIcon/>
                        </ListItemIcon>
                    <ListItemText primary="Status"/>
                </ListItem>
                </ListItemButton>
                <ListItemButton selected={pageName == "Data View"} onClick={()=>{navigate("/view")}}>
                    <ListItem key="Data View">
                        <ListItemIcon>
                            <ViewListIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Data View"/>
                    </ListItem>
                </ListItemButton>
            </List>
        </Box>
    </>);

    return (
        <>
            <Drawer variant={isMobile ? "temporary" : "permanent"} open={open} onClose={onClose}>
                {DrawerList}
            </Drawer>
        </>
    )
}