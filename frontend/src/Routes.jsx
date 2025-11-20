import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Feed from "./pages/Feed";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quiz from "./pages/Quiz";

const Routers = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/feed" element={<Feed/>}/>
                <Route path="/quiz" element={<Quiz/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Routers