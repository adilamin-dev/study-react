import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=>isActive? 'navActive' : 'NavDeactive'} to="/study-react/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? 'navActive' : 'NavDeactive'} to="/study-react/post">Post</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? 'navActive' : 'NavDeactive'} to="/study-react/Products">Products</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? 'navActive' : 'NavDeactive'} to="/study-react/profile/Adil Amin">Profile</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;