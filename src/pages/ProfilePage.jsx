import { useParams } from "react-router-dom";
import Menu from "../modules/Menu";

const ProfilePage = () => {

    let {myName} = useParams();

    return (
        <div>
            <Menu/>
            <h2>This is Profile Page!</h2>
            <h2>Received my name by useParams from Link tag: {myName}</h2>
        </div>
    );
};

export default ProfilePage;