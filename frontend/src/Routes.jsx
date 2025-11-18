import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Feed from "./pages/Feed";
import Header from "./components/Header";




const Routers = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/feed" element={<Feed/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers