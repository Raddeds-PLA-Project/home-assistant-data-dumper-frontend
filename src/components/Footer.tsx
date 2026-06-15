import {
    Typography,
    Box
} from "@mui/material";

export default function Footer() {
    return (
        <>
            <Box className=" bg-slate-300 text-center">
                <Typography variant="caption">
                    Coded with occasional vibes by Radded.
                </Typography>
                <Typography variant="caption" sx={{marginLeft: "1rem"}}>
                    Backend Version: 0.466_alpha_prep_dumping
                </Typography>
                <Typography variant="caption" sx={{marginLeft: "0.5rem"}}>
                    Frontend Version: 0.3_alpha_collapsible_desktop_sidebar
                </Typography>
            </Box>
        </>
    );
}