import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";
import Titlebar from "./components/Titlebar";

function Status() {
    return (
        <>
            <p>This is the status page.</p>
        </>
    )
}

function DataView() {
    return (
        <>
            <p className="font-bold">This is the Data View page.</p>
        </>
    )
}

function App() {

    return (
        <>
            <HamburgerMenu />
            <Titlebar />
            <Router>
                <Routes>
                    <Route path="/" element={<Status />} />
                    <Route path="/view" element={<DataView />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
