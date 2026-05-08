import {
    Box,
    Typography
} from "@mui/material";

export default function About() {
    return (
        <>
            <Box className="justify-center">
                <Typography variant="h4" className="pt-4">
                    Radded's Home Assistant Data Dumper
                </Typography>
                <Typography className="pt-4">
                    A simple app <sub className=" text-gray-400">(or addon? no one knows anymore)</sub> that extracts and logs state history from your Home Assistant.<br/>
                    Why would you need this data? There's more to come!
                </Typography>
                <Box className="h-16 spacer"></Box>
                <Typography variant="h6" className="pt-2">
                    Created by Radded
                </Typography>
            </Box>
        </>
    )
}