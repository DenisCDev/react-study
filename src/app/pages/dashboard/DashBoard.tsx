import { Link } from "react-router-dom";

export const DashBoard = () => {
    return (
        <div>
            <p>Dashboard</p>
            <Link to="/login">Login</Link>
        </div>
    );
}
