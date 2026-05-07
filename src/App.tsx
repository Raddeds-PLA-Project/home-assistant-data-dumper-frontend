import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Navigation from "./components/Navigation";
import DataView from "./pages/DataView"
import Status from "./pages/Status"

function AppContent() {
    const currentPagePath = useLocation().pathname;
    const pageName =
        currentPagePath === "/" ? "Status"
        : currentPagePath === "/view" ? "Data View" : "";

    return (
        <>
            <Navigation pageName={pageName} />
            <Routes>
                <Route path="/" element={<Status />} />
                <Route path="/view" element={<DataView />} />
            </Routes>
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