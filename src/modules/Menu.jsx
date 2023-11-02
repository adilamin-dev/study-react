import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=>isActive? 'navActive' : 'NavDeactive'} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? 'navActive' : 'NavDeactive'} to="/post">Post</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? 'navActive' : 'NavDeactive'} to="/Products">Products</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? 'navActive' : 'NavDeactive'} to="/profile/Adil Amin">Profile</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;