import UserProfile from "@/components/UserProfile";
import Tabs from "./Tabs";

const Profile = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col gap-20 lg:flex-row">
      <UserProfile />
      <Tabs />
    </div>
  );
};
export default Profile;
