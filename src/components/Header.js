import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { userIcon } from "../utils/constant/Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { modifyGptFlag, setDefaultFlag } from "../utils/redux/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const data = useSelector((store) => store.gpt);

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
      <div className="md:border md:border-black sticky top-2 p-2 mt-1 mx-48 bg-none md:bg-black text-white flex justify-center md:justify-between rounded-lg z-10">
        <p
          className="text-xl font-bold cursor-pointer"
          onClick={() => dispatch(setDefaultFlag())}
        >
          primeGPT
        </p>
        <div className="flex">
          <div className="mx-8">
            {data.gptFlag ? (
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="xl"
                className="cursor-pointer"
                onClick={handleSearchClick}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHouse}
                size="lg"
                className="cursor-pointer"
                onClick={handleSearchClick}
              />
            )}
          </div>
          <span className="mr-1 font-semibold text-gray-500">
            {user ? user.displayName : "Guest"}
          </span>
          <img
            src={userIcon}
            alt="user-icon"
            className="h-7 cursor-pointer pl-1"
            onClick={handleSignOut}
          />
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
