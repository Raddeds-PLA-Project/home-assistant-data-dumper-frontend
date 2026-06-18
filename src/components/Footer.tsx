import {
    Typography,
    Box
} from "@mui/material";

export default function Footer() {
    return (
        <>
            <Box className=" bg-slate-300 text-center"> // TODO: The version numbers get a little long on mobile
                <Typography variant="caption">
                    Coded with occasional vibes by Radded.
                </Typography>
                <Typography variant="caption" sx={{marginLeft: "1rem"}}>
                    Backend Version: 0.522_alpha_full_schedule_test
                </Typography>
                <Typography variant="caption" sx={{marginLeft: "0.5rem"}}>
                    Frontend Version: 0.6_alpha_return_xport
                </Typography>
            </Box>
        </>
    );
}