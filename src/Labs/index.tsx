import { Route, Routes } from "react-router";
import Lab1 from "./Lab1"
import Lab2 from "./Lab2";
import TOC from "./TOC";
export default function Labs() {
    return (
        <div>
            <h1>Liang Zhen</h1>
            <h1>section2</h1>
            <h1>https://github.com/liangz25/kanbas-react-web-app.git</h1>
            <h1>Labs</h1>
            <TOC />
            <Routes>
                <Route path = "Lab1" element ={<Lab1 />}/>
                <Route path = "Lab2" element ={<Lab2 />}/>
                <Route path = "Lab2" element = {<h2>lab3</h2>}/>
            </Routes>
        </div>
    );
}