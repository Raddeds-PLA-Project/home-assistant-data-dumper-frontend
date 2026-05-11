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
                    Version: 0.426_alpha_webui_update
                </Typography>
            </Box>
        </>
    );
}