import Image from "next/image";
import client2 from "../components/resource/Images/client2.jpg";
import { AiFillHome } from "react-icons/ai";
import { GoKey } from "react-icons/go";
import { FaMotorcycle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import Title from "../components/resource/Title";
import Input from "../components/forms/Input";
import { useState } from "react";
import Account from "../components/clientProfile/Account";
import Password from "../components/clientProfile/Password";
import Order from "../components/clientProfile/Order";

function Profile() {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10">
      <div className="lg:w-80 1-100 flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
          <Image
            src={client2}
            alt="client2"
            width={100}
            height={100}
            className=" rounded-full"
          />
          <b className="text-2xl mt-1">John Doe</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            className={`flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5 ${
              tabs === 0 ? "bg-primary" : ""
            }`}
            onClick={() => setTabs(0)}
          >
            <AiFillHome />
            <button>Account</button>
          </li>
          <li
            className={`flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5 ${
              tabs === 1 ? "bg-primary" : ""
            }`}
            onClick={() => setTabs(1)}
          >
            <GoKey />
            <button>Password</button>
          </li>
          <li
            className={`flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5 ${
              tabs === 2 ? "bg-primary" : ""
            }`}
            onClick={() => setTabs(2)}
          >
            <FaMotorcycle />
            <button>Orders</button>
          </li>
          <li
            className={`flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5 ${
              tabs === 3 ? "bg-primary" : ""
            }`}
            onClick={() => setTabs(3)}
          >
            <ImExit />
            <button>Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 ? <Account /> : ""}
      {tabs === 1 ? <Password /> : ""}
      {tabs === 2 ? <Order /> : ""}
    </div>
  );
}

export default Profile;
