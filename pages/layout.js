import { Link, Outlet } from 'react-router-dom'

export default function Home(){
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/mainPage">Main Page</Link></li>
                    <li><Link to="/learn">Learn</Link></li>
                    <li><Link to="/predictor">Predictor</Link></li>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
            <br />
        </div>
    )
}