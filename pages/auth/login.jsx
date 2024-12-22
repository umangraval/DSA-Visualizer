import React, { useState } from "react";
import { triggerToast } from "utils/handlers";
import { withoutAuth, useAuth } from "utils/auth";

function Login() {
  const [regno, setregno] = useState("");
  const [processing, setProcessing] = useState(false);
  const [pwd, setPwd] = useState("");
  const auth = useAuth();

  const handleLogin = async () => {
    if (!regno.length)
      return triggerToast({ type: "error", message: "Please provide input" });
    setProcessing(true);
    const data = await auth.signin(regno, pwd);
    // setTimeout(() => {}, 3000);
    setProcessing(false);
    triggerToast(data);
  };

  return (
    <div className="flex w-full justify-center items-center dark:bg-gray-900">
      <div className="mx-auto">
        <h1 className="my-3 text-4xl font-semibold text-gray-700 dark:text-gray-200 w-full text-center">
          Welcome to DS Visualization Tool
        </h1>
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <div className="m-7">
            <form action="">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Student/Teacher ID
                </label>
                <input
                  type="text"
                  name="regno"
                  id="regno"
                  placeholder="18BCE1070"
                  value={regno}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  onChange={(e) => setregno(e.target.value.toLowerCase())}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  placeholder="Password"
                  value={pwd}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  onChange={(e) => setPwd(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400 italic">
                  Note: If logging in for the first time then the password used
                  will be set as the new password
                </label>
                <button
                  type="button"
                  disabled={processing}
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  style={
                    processing ? { pointerEvents: "none", opacity: "0.5" } : {}
                  }
                  onClick={() => handleLogin()}
                >
                  Sign in
                  {processing && (
                    <svg
                      className="animate-spin h-4 w-4 mx-3 text-indigo relative inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="20"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withoutAuth(Login);
