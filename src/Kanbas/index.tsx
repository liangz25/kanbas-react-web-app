import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <h1>Kanbas</h1>
            <h1>Liang Zhen</h1>
            <h1>section2</h1>
            <h1>https://github.com/liangz25/kanbas-react-web-app.git</h1>
            <table>
                <tbody>
                    <tr>
                        <td valign="top">
                            <KanbasNavigation />
                        </td>
                        <td valign="top">
                            <Routes>
                                <Route path="/" element={<Navigate to="Account" />} />
                                <Route path="/Account/*" element={<Account />} />
                                <Route path="/Dashboard" element={<Dashboard />} />
                                <Route path="/Courses/:cid/*" element={<Courses />} />
                                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                                <Route path="/Inbox" element={<h1>Inbox</h1>} />

                            </Routes>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
