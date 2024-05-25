import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { userIcon } from "../utils/constant/Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { modifyGptFlag } from "../utils/redux/gptSlice";
import ToolTip from "../utils/tooltip.tsx";
import { faIdCardClip } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleSearchClick = () => {
    dispatch(modifyGptFlag());
  };

  return auth.currentUser ? (
    <>
      <div className="md:border md:border-black sticky top-2 p-2 mt-1 mx-48 bg-none md:bg-black opacity-85 text-white flex justify-center md:justify-between rounded-lg z-10">
        <Link to="/browse">
          <p className="text-xl font-bold cursor-pointer">primeGPT</p>
        </Link>
        <div className="flex">
          <div className="mx-10 md:mx-0">
            <Link to="/browse">
              <FontAwesomeIcon
                icon={faHouse}
                size="lg"
                className="cursor-pointer"
                onClick={handleSearchClick}
              />
            </Link>
          </div>
          <div className="mx-10">
          <ToolTip tooltip="AI Search">
            <Link to="/search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                className="cursor-pointer"
                onClick={handleSearchClick}
              />
            </Link>
            </ToolTip>
          </div>
          <div className="mr-10">
          <ToolTip tooltip="Help & Support">
            <Link to="/support">
              <FontAwesomeIcon
                icon={faIdCardClip}
                size="lg"
                className="cursor-pointer"
              />
            </Link>
            </ToolTip>
          </div>
          <span className="mr-1 font-semibold text-gray-500">
            {user ? user.displayName : "Guest"}
          </span>
          <ToolTip tooltip="Sign Out">
            <img
              src={userIcon}
              alt="user-icon"
              className="h-7 cursor-pointer pl-1"
              onClick={handleSignOut}
            />
          </ToolTip>
        </div>
      </div>
    </>
  ) : (
    <div className="absolute z-10">
      {" "}
      <h1 className="text-white text-2xl font-semibold m-4">primeGPT</h1>
    </div>
  );
};

export default Header;
