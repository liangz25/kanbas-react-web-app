import { Route, Routes } from "react-router";
import Lab1 from "./Lab1"
import Lab2 from "./Lab2";
export default function Labs() {
    return (
        <div>
            <h1>Liang Zhen</h1>
            <h1>Labs</h1>
            <Routes>
                <Route path = "Lab1" element ={<Lab1 />}/>
                <Route path = "Lab2" element ={<Lab2 />}/>
                <Route path = "Lab2" element = {<h2>lab3</h2>}/>
            </Routes>
        </div>
    );
}