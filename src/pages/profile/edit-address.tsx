import { Dashboard } from "../../component/UserProfile/Dashboard";
import { Profile } from "../../component/UserProfile/Profile";
import { UserAddress } from '../../component/UserProfile/Address/index';
import { EditAddress } from "../../component/UserProfile/EditAddress";

export default function Edit_Address() {
    return (
        <Dashboard li4='select'>
            <EditAddress/>
        </Dashboard>
    )
}