import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                        style={({isActive}) => ({color: isActive && "red"})}
                        to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                        style={({isActive}) => ({color: isActive && "red"})}
                        to="about">About</NavLink>
                    </li>
                    <li>
                        <NavLink
                        style={({isActive}) => ({color: isActive && "red"})}
                        to="blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink
                        style={({isActive}) => ({color: isActive && "red"})}
                        to="users">Users</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout
