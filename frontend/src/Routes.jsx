import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Feed from "./pages/Feed";
import Header from "./components/Header";
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
        </BrowserRouter>
    )
}

export default Routers