import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    ListItemIcon,
    ListItemButton,
    Collapse
} from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import { FaPoop } from "react-icons/fa";
import HistoryIcon from '@mui/icons-material/History';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from "react-router";
import type { OpenCloseProps } from "../type/appTypes/OpenCloseProps";
import type { NavElementProps } from "../type/appTypes/NavElementProps";
import type { MobileProps } from "../type/appTypes/MobileProps";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from "react";

export default function HamburgerMenu({ open, onClose, pageName, isMobile }: OpenCloseProps & NavElementProps & MobileProps) {
    const navigate = useNavigate();
    const [dumpOpen, setDumpOpen] = useState(true);

    const DrawerList = (<>
        <Box sx={{width: 250}} role="presentation">
            <Typography sx={{m:2, textAlign:"center"}} variant="h6" >Radded's Home Assistant Data Dumper</Typography>
            <List>
                <ListItemButton selected={dumpOpen} onClick={()=>{setDumpOpen(!dumpOpen)}}>
                    <ListItem>
                        <ListItemIcon>
                            <FaPoop/>
                        </ListItemIcon>
                        <ListItemText primary="Data Dumper"/>
                        {dumpOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </ListItemButton>
                <Collapse in={dumpOpen}>
                    <ListItemButton selected={pageName == "Status"} onClick={()=>{navigate("/index.html")}}>
                        <ListItem key="Status">
                            <ListItemIcon >
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
                    <ListItemButton selected={pageName == "About"} onClick={() => {navigate("/about")}}>
                        <ListItem key="About">
                            <ListItemIcon>
                                <InfoIcon/>
                            </ListItemIcon>
                            <ListItemText primary="About"/>
                        </ListItem>
                    </ListItemButton>
                </Collapse>
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