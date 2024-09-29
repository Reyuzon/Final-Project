import Link from "next/link";
import React from "react";
import { GoHomeFill } from "react-icons/go";

export default function BottomNav({ activeMenu, profilePicture }) {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 transition-transform translate-y-0 sm:translate-y-full">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <Link
          href="/"
          className="inline-flex flex-col items-center justify-center px-5 group">
          <GoHomeFill
            className={`w-7 h-7 mb-1 ${
              activeMenu == "home"
                ? " text-blue-800"
                : "text-gray-500 group-hover:text-blue-800"
            }`}
          />
          <span
            className={`text-sm ${
              activeMenu == "home"
                ? "text-blue-800"
                : "text-gray-500 group-hover:text-blue-800"
            }`}>
            Home
          </span>
        </Link>
        <Link
          href="/"
          className="inline-flex flex-col items-center justify-center px-5 group">
          <GoHomeFill
            className={`w-7 h-7 mb-1 ${
              activeMenu == "home"
                ? " text-blue-800"
                : "text-gray-500 group-hover:text-blue-800"
            }`}
          />
          <span
            className={`text-sm ${
              activeMenu == "home"
                ? "text-blue-800"
                : "text-gray-500 group-hover:text-blue-800"
            }`}>
            Home
          </span>
        </Link>
        <Link
          href="/"
          className="inline-flex flex-col items-center justify-center px-5 group">
          <GoHomeFill
            className={`w-7 h-7 mb-1 ${
              activeMenu == "home"
                ? " text-blue-800"
                : "text-gray-500 group-hover:text-blue-800"
            }`}
          />
          <span
            className={`text-sm ${
              activeMenu == "home"
                ? "text-blue-800"
                : "text-gray-500 group-hover:text-blue-800"
            }`}>
            Home
          </span>
        </Link>
        <Link
          href="/"
          className="inline-flex flex-col items-center justify-center px-5 group">
          <GoHomeFill
            className={`w-7 h-7 mb-1 ${
              activeMenu == "home"
                ? " text-blue-800"
                : "text-gray-500 group-hover:text-blue-800"
            }`}
          />
          <span
            className={`text-sm ${
              activeMenu == "home"
                ? "text-blue-800"
                : "text-gray-500 group-hover:text-blue-800"
            }`}>
            Home
          </span>
        </Link>
        <Link
          href="/profile"
          className="inline-flex flex-col items-center justify-center px-5 group">
          {/* <GoHomeFill
            className={`w-7 h-7 mb-1 ${
              activeMenu == "home"
                ? " text-blue-800"
                : "text-gray-500 group-hover:text-blue-800"
            }`}
          /> */}
          <img
            className={`rounded-full w-7 h-7 mb-1 ${
              activeMenu == "profile"
                ? "border-2 border-blue-800"
                : "group-hover:border-2 group-hover:border-blue-800"
            }`}
            src={profilePicture ? profilePicture : "/images/profile.jpg"}
            alt="Profile Picture"
          />
          <span
            className={`text-sm ${
              activeMenu == "profile"
                ? "text-blue-800"
                : "text-gray-500 group-hover:text-blue-800"
            }`}>
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
}
