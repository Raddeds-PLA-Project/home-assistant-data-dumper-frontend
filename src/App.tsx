import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import {
    Box
} from "@mui/material";
import DataView from "./pages/DataView";
import Status from "./pages/Status";
import About from "./pages/About"
import Container from "@mui/material/Container";
import Titlebar from "./components/Titlebar";
import HamburgerMenu from "./components/HamburgerMenu";
import Footer from "./components/Footer";
import { useIsMobile } from "./hooks/isMobile";

function AppContent() {
    const currentPagePath = useLocation().pathname;
    const pageName =
        currentPagePath === "/" ? "Status"
        : currentPagePath === "/view" ? "Data View"
        : currentPagePath === "/about" ? "About"
        : "";
    const [menuOpenMobile, setMenuOpenMobile] = useState(false);
    const isMobile = useIsMobile();
    // TODO: Dynamic page names relative to the actual list of pages
    // - This will need to be carried through into Navigation (HamburgerMenu and Titlebar)
    // - Not every single page needs the Export Button!

    return (
        <>
            <Box sx={{display:"flex"}}>
                <Box component="nav" sx={{width: isMobile ? 0 : 250, flexShrink:{sm:0}}}>
                    <HamburgerMenu isMobile={isMobile} pageName={pageName} open={menuOpenMobile} onClose={() => setMenuOpenMobile(false)} />
                </Box>
                <Box component="main" className="grow flex flex-col" sx={{ width: { sm: isMobile ? "100%" :`calc(100% - 250 px)`}, minHeight: "100vh"}}>
                    <Titlebar pageName={pageName} setOpen={setMenuOpenMobile} open={menuOpenMobile} />
                    <Container className="mt-4 mb-16 grow">
                        <Routes>
                            <Route path="/" element={<Status />} />
                            <Route path="/view" element={<DataView />} />
                            <Route path="/about" element={<About/>}/>
                        </Routes>
                    </Container>
                    <Footer/>
                </Box>
            </Box>
        </>
    )
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    )
}

export default App