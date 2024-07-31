import UserProfile from "@/components/UserProfile";
import Tabs from "./Tabs";
import MobileTab from "@/components/MobileTab";

const Profile = () => {
  return (
    <div>
      <div className="hidden w-full h-[80vh] lg:flex flex-col gap-20 lg:flex-row">
        <UserProfile />
        <Tabs />
      </div>
      <div>
        <MobileTab />
      </div>
    </div>
  );
};
export default Profile;
