import React from "react";

export default function Footer() {
  return (
    <footer>
      <hr className="border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center p-3">
          <div className="text-sm text-gray-500 dark:text-gray-400 pb-3">
            Copyright © <span id="get-current-year">2023</span> Umang Raval.
          </div>
        </div>
      </div>
    </footer>
  );
}
