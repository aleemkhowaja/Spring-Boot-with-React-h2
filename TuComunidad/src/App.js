import * as React from 'react';
import Dashboard from './Components/Dashboard';
import Community from './Components/Community';
import Votes from './Components/Votes';
import Pagestate from './Components/Pagestate';
import Package from './Components/Packge';
import Reservation from './Components/Reservation';
import User from './Components/User';
import './assets/styles/custom.css';
import {
    BrowserRouter, Link,
    Route, Router,
    Routes
} from "react-router-dom";
import Login from "./Components/Login";
import LoginPage from "./Components/LoginPage";
import CreateVotes from "./Components/CreateVotes";
import CreatePackage from "./Components/CreatePackage";

export default function App() {

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/'
    }

    return (
        <div className='container'>
            <h1>TuComunidad </h1>
            {localStorage.getItem("id") ?
            <div className='row header'>
                <h4>Login By : {localStorage.getItem("name")} </h4>
                <nav>
                    <Link to="/dashboard">Home |</Link>
                    <Link to="/pagestate">Page of state |</Link>
                    {localStorage.getItem("loginBy") == 'neighbour' ?  <Link to="/reservation">Reservation |</Link>  : '' }
                    {localStorage.getItem("loginBy") == 'neighbour' ? <Link to="/forum">Forum |</Link> : '' }
                    {localStorage.getItem("loginBy") == 'neighbour' ? <Link to="/votes">Votes |</Link> : '' }
                    {localStorage.getItem("loginBy") == 'neighbour' ? <Link to="/package">Packages |</Link> : '' }
                    {localStorage.getItem("loginBy") == 'concierge' ? <Link to="/create-package">Packages |</Link> : '' }
                    {localStorage.getItem("loginBy") == 'manager' ? <Link to="/create-votes">Votes |</Link> : '' }

                    <input type="button" onClick={handleLogout} value="Logout" />
                </nav>
            </div> : ''}
                <Routes>
                    <Route path="/"   element={<Login/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/pagestate" element={<Pagestate />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/forum" element={<Community />} />
                    <Route path="/votes" element={<Votes />} />
                    <Route path="/package" element={<Package />} />
                    <Route path="/create-votes" element={<CreateVotes />} />
                    <Route path="/create-package" element={<CreatePackage />} />
                    <Route path="/user" element={<User />} />
                </Routes>
        </div>

    );
}
