import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoHomeFill } from "react-icons/go";

export default function Sidebar({ activeMenu, profilePicture }) {
  return (
    <>
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <Image
            alt="Logo Icon"
            src="/images/logo.svg"
            width={280}
            height={280}
            className="mx-auto w-1/2"
          />
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className={`flex items-center p-2 ${
                  activeMenu == "home"
                    ? "text-blue-800"
                    : "text-gray-900 hover:text-blue-800"
                } rounded-lg hover:bg-gray-100 group`}>
                <GoHomeFill
                  className={`flex-shrink-0 w-7 h-7 ${
                    activeMenu == "home"
                      ? "text-blue-800"
                      : "text-gray-500 group-hover:text-blue-800"
                  } transition duration-75 `}
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`flex items-center p-2 ${
                  activeMenu == "home"
                    ? "text-blue-800"
                    : "text-gray-900 hover:text-blue-800"
                } rounded-lg hover:bg-gray-100 group`}>
                <GoHomeFill
                  className={`flex-shrink-0 w-7 h-7 ${
                    activeMenu == "home"
                      ? "text-blue-800"
                      : "text-gray-500 group-hover:text-blue-800"
                  } transition duration-75 `}
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`flex items-center p-2 ${
                  activeMenu == "home"
                    ? "text-blue-800"
                    : "text-gray-900 hover:text-blue-800"
                } rounded-lg hover:bg-gray-100 group`}>
                <GoHomeFill
                  className={`flex-shrink-0 w-7 h-7 ${
                    activeMenu == "home"
                      ? "text-blue-800"
                      : "text-gray-500 group-hover:text-blue-800"
                  } transition duration-75 `}
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`flex items-center p-2 ${
                  activeMenu == "home"
                    ? "text-blue-800"
                    : "text-gray-900 hover:text-blue-800"
                } rounded-lg hover:bg-gray-100 group`}>
                <GoHomeFill
                  className={`flex-shrink-0 w-7 h-7 ${
                    activeMenu == "home"
                      ? "text-blue-800"
                      : "text-gray-500 group-hover:text-blue-800"
                  } transition duration-75 `}
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className={`flex items-center p-2 ${
                  activeMenu == "profile"
                    ? "text-blue-800"
                    : "text-gray-900 hover:text-blue-800"
                } rounded-lg hover:bg-gray-100 group`}>
                <img
                  className={`rounded-full w-7 h-7 ${
                    activeMenu == "profile"
                      ? "border-2 border-blue-800"
                      : "group-hover:border-2 group-hover:border-blue-800"
                  }`}
                  src={profilePicture ? profilePicture : "/images/profile.jpg"}
                  alt="Profile Picture"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>
          </ul>
          <div
            id="dropdown-cta"
            class="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
            role="alert">
            <div class="flex items-center mb-3">
              <span class="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                Beta
              </span>
              <button
                type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                data-dismiss-target="#dropdown-cta"
                aria-label="Close">
                <span class="sr-only">Close</span>
                <svg
                  class="w-2.5 h-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">
              Preview the new Flowbite dashboard navigation! You can turn the
              new navigation off for a limited time in your profile.
            </p>
            <a
              class="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
              href="#">
              Turn new navigation off
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
