import avatar from "../../assets/profile.svg";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col gap-20 lg:flex-row">
      <div className="h-full flex items-center justify-center">
        <div className="bg-white flex flex-col gap-10 justify-center items-center shadow-[0_2px_8px_0_#00000014] rounded-lg py-[10rem] px-10">
          <div className="flex flex-col gap-2 items-center">
            <Image
              src={avatar}
              alt="profile_picture"
              width={100}
              height={100}
            />
            <span className="text-2xl font-bold">LIONEL MESSI</span>
            <span>short bio</span>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-1 text-xl">
              <div>newleters</div>
              <div className="font-bold">200</div>
            </div>
            <div className="flex flex-col items-center gap-1 text-xl">
              <div>followers</div>
              <div className="font-bold">200</div>
            </div>
            <div className="flex flex-col items-center gap-1 text-xl">
              <div>following</div>
              <div className="font-bold">200</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-max mt-10 text-xl gap-10 border-b-2 border-gray-200 py-4">
        <div>Newsletters</div>
        <div>Saved</div>
      </div>
    </div>
  );
};
export default Profile;
