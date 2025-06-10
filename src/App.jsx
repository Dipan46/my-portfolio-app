import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Photos from "./components/Photos";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Home />
                <About />
                <Projects />
                <Photos />
            </main>
            <Footer />
        </div>
    );
}

export default App;
