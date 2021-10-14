import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../images/logo.png";
import { useMoralis } from "react-moralis";
import { formatAddress } from "../utils/utils";
import { Link, useHistory, useLocation } from "react-router-dom";
import { getUser } from "../adapters/MoralisAdapter";
import { mintFMDToken } from "../adapters/contracts";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/index";

const Navbar = () => {
  const {
    isAuthenticating,
    authenticate,
    isAuthenticated,
    logout,
    Moralis,
    user,
  } = useMoralis();

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { setProfile, setLoading } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const profile = useSelector((state) => state.profile.publicView);
  const tokenContract = useSelector((state) => state.contract.tokenContract);
  return (
    <nav
      className="flex justify-between items-center h-16 text-black mx-auto px-4 bg-white sticky top-0 z-10 bg-clip-padding shadow-lg"
      role="navigation"
    >
      <Link to="/">
        <div class="flex flex-shrink-0 text-black mr-2 pl-8">
          <img src={logo} className="h-48" />
        </div>
      </Link>
      <div className="px-4 cursor-pointer lg:hidden xl:hidden 2xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div class="flex-row md:hidden sm:hidden w-full block flex-grow lg:flex lg:w-auto items-center justify-end pr-8">
        <div class="text-sm lg:flex-grow">
          {!isAuthenticated && (
            <div>
              <button
                class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4 transform transition duration-500 ease-linear hover:scale-105"
                onClick={() => {
                  if (!isAuthenticated) {
                    authenticate().then(() => {
                      setLoading(true);
                      getUser().then((user) => {
                        console.log(user);
                        setProfile(user);
                        setLoading(false);
                        if (user && user.get("role") === "student") {
                          history.push(
                            `/studentProfile/${user.get("ethAddress")}`
                          );
                        } else if (user && user.get("role") === "school") {
                          history.push("/collegeDashboard");
                        } else {
                          history.push("/createProfile");
                        }
                      });
                    });
                  } else {
                    history.push("/createProfile");
                  }
                }}
              >
                I am a student
              </button>
              <button
                class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4 transform transition duration-500 ease-linear hover:scale-105"
                onClick={() => {
                  if (!isAuthenticated) {
                    authenticate().then(() => {
                      setLoading(true);

                      getUser().then((user) => {
                        setProfile(user);
                        setLoading(false);

                        console.log(`user connected ${user}`);
                        if (user && user.get("role") === "school") {
                          history.push("/collegeDashboard");
                        } else if (user && user.get("role") === "student") {
                          history.push(
                            `/studentProfile/${user.get("ethAddress")}`
                          );
                        } else {
                          history.push("/createSchoolProfile");
                        }
                      });
                    });
                  } else {
                    history.push("/createSchoolProfile");
                  }
                }}
              >
                I am an university
              </button>
            </div>
          )}
          {location.pathname === "/editProfile" && (
            <div>
              <button
                class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4 transform transition duration-500 ease-linear hover:scale-105"
                onClick={() => {
                  history.push(`/studentProfile/${profile?.get("ethAddress")}`);
                }}
              >
                View Profile
              </button>
            </div>
          )}
          {location.pathname.includes("/studentProfile/") && (
            <div>
              <button
                class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4 transform transition duration-500 ease-linear hover:scale-105"
                onClick={() => {
                  history.push(`/`);
                }}
              >
                Explore campaigns
              </button>
            </div>
          )}
        </div>
        {/*<button
          class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-green-900 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          aria-label="Notification"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>*/}
        <div>
          <button
            class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4 transform transition duration-500 ease-linear hover:scale-105 text-sm "
            onClick={() => {
              if (!isAuthenticated) {
                authenticate().then(() => {
                  console.log(`hi`);
                  console.log(tokenContract);
                  mintFMDToken(tokenContract);
                });
              } else {
                mintFMDToken(tokenContract);
              }
            }}
          >
            Mint Test token
          </button>
        </div>
        {!isAuthenticating && !isAuthenticated && (
          <div>
            <button
              href="#"
              class="rounded-full py-3 px-6 inline-block text-sm bg-green-600 leading-none border text-white hover:border-green-900 hover:text-white hover:bg-green-800 mt-4 lg:mt-0 transform transition-colors ease-in-out duration-500 "
              onClick={() => {
                if (!isAuthenticated) {
                  authenticate().then(() => {
                    setLoading(true);

                    getUser().then((user) => {
                      setProfile(user);
                      setLoading(false);

                      console.log(`user connected ${user}`);
                    });
                  });
                } else if (isAuthenticated) {
                  console.log("authed");
                }
              }}
            >
              Connect Wallet
            </button>
          </div>
        )}
        {isAuthenticated && (
          <button
            href="#"
            class="rounded-full py-3 px-6 inline-block text-sm bg-green-600 leading-none border text-white hover:border-green-900 hover:text-white hover:bg-green-800 mt-4 lg:mt-0 transform transition-colors ease-in-out duration-500 "
            onClick={() => {
              if (isAuthenticated) {
                logout();
                history.push("/");
              }
            }}
          >
            {formatAddress(user?.get("ethAddress"))}
          </button>
        )}
        {isAuthenticating && (
          <button
            href="#"
            class="rounded-full py-3 px-6 inline-block text-sm bg-green-600 leading-none border text-white hover:border-green-900 hover:text-white hover:bg-green-800 mt-4 lg:mt-0 transform transition-colors ease-in-out duration-500 "
          >
            Connecting ...
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
