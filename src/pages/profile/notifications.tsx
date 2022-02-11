import { Dashboard } from "../../component/UserProfile/Dashboard";
import { Notification } from "../../component/UserProfile/Notifications";
import { Profile } from "../../component/UserProfile/Profile";

export default function Notifications() {
    return (
        <Dashboard li2='select'>
            <Notification/>
        </Dashboard>
    )
}