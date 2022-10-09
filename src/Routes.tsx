import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import { Profile } from "./pages/Profile"

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    )
}