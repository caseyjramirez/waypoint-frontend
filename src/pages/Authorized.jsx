import { Outlet } from "react-router-dom";
import SideBar from "../components/homeComponents/home.sidebar";

function Authorized({ user, handleAddNewTask, viewing, setViewing }) {
    return (
        <div>
            <SideBar 
                user={user}
                onAddNewTask={handleAddNewTask}
                viewing={viewing}
                setViewing={setViewing}
            />

            <Outlet />
        </div>
    );
}

export default Authorized;