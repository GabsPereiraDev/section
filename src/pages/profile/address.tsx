import { Dashboard } from "../../component/UserProfile/Dashboard";
import { Profile } from "../../component/UserProfile/Profile";
import { UserAddress } from '../../component/UserProfile/Address/index';

export default function Address() {
    return (
        <Dashboard li4='select'>
            <UserAddress/>
        </Dashboard>
    )
}