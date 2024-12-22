import React from "react";
import { useAuth } from "utils/auth";
import { triggerToast } from "utils/handlers";
import Link from "next/link";

export default function Navbar() {
  const auth = useAuth();
  return (
    <div className="bg-indigo-500 shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                className="w-10 h-10 text-white"
              >
                <g fill="currentColor">
                  <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                    <path d="M3992.2,4060.3c-640.2-212.7-705.6-1082-104.3-1378.5c124.8-61.4,151.4-67.5,331.3-67.5c173.9,0,206.6,6.1,315,59.3c155.4,75.7,286.3,206.6,355.9,355.9c49.1,102.3,55.2,141.1,55.2,321.1c0,247.5-36.8,343.6-194.3,509.3C4558.8,4064.4,4249.9,4146.2,3992.2,4060.3z M4331.7,3788.3c112.5-28.6,249.5-143.2,298.6-251.6c75.7-165.7,34.8-380.4-96.1-509.3c-83.9-83.9-159.5-118.6-286.3-130.9c-208.6-22.5-415.2,126.8-470.4,339.5c-59.3,231.1,63.4,460.2,292.5,544.1C4166.1,3814.9,4219.2,3816.9,4331.7,3788.3z" />
                    <path d="M3012.5,2816.7c-141.1-85.9-263.8-161.6-272-171.8c-10.2-8.2,14.3-69.5,51.1-139.1l69.5-122.7l284.3,171.8c157.5,94.1,286.3,177.9,286.3,186.1c-2.1,34.8-124.8,231.1-143.2,231.1C3278.4,2970.1,3153.6,2900.6,3012.5,2816.7z" />
                    <path d="M1742.4,2761.5c-212.7-61.4-388.6-212.7-486.8-421.3c-45-96.1-53.2-143.2-53.2-298.6c0-159.5,8.2-200.4,57.3-308.8c73.6-157.5,212.7-296.6,372.3-370.2c106.4-49.1,147.3-57.3,306.8-57.3c157.5,0,200.4,8.2,300.7,55.2c161.6,75.7,290.4,200.4,370.2,362c59.3,120.7,65.5,151.4,65.5,319.1c0,167.7-6.1,198.4-65.5,319.1c-124.8,251.6-349.7,402.9-625.9,419.3C1897.8,2784,1797.6,2777.9,1742.4,2761.5z M2147.4,2444.5c272-141.1,327.3-527.7,104.3-734.3c-67.5-63.4-218.8-128.8-300.7-128.8c-247.5-2.1-472.5,218.9-472.5,464.3C1478.5,2374.9,1848.7,2595.8,2147.4,2444.5z" />
                    <path d="M6135.7,2522.2c-677-171.8-783.4-1090.1-161.6-1394.9c124.8-61.4,151.4-67.5,331.4-67.5c167.7,0,210.6,8.2,308.8,53.2c157.5,73.6,265.9,177.9,347.7,329.3c59.3,112.5,69.6,151.4,75.7,312.9c6.1,153.4,0,204.5-36.8,302.7c-61.4,163.6-227,339.5-388.6,411.1C6475.2,2530.4,6264.6,2554.9,6135.7,2522.2z M6418,2233.8c120.7-30.7,263.8-157.5,306.8-274.1c53.2-137,34.7-312.9-42.9-423.4c-77.7-112.5-243.4-200.4-374.3-200.4c-137,0-300.7,87.9-380.4,200.4c-49.1,71.6-61.4,112.5-67.5,227c-10.2,167.7,32.7,267.9,161.6,376.3C6141.8,2244,6262.5,2272.7,6418,2233.8z" />
                    <path d="M2787.5,1569.1c0-10.2-36.8-65.4-79.8-122.7l-79.8-104.3l184.1-137c100.2-75.7,192.3-141.1,206.6-145.2c22.5-8.2,167.7,180,167.7,216.8c0,6.1-77.7,71.6-173.9,141.1c-96.1,71.6-186.1,137-198.4,149.3C2799.8,1577.3,2787.5,1579.3,2787.5,1569.1z" />
                    <path d="M5182.6,1309.4c-94.1-59.3-171.8-110.5-173.9-116.6c0-6.1,30.7-63.4,69.5-126.8l71.6-118.6l190.2,114.5c104.3,63.4,188.2,120.7,184.1,126.8c-40.9,88-132.9,229.1-149.3,227C5364.6,1415.7,5276.7,1366.6,5182.6,1309.4z" />
                    <path d="M3861.3,1327.8c-159.5-38.9-288.4-108.4-417.2-227c-548.1-509.3-270-1409.2,476.6-1546.3c378.4-69.5,789.5,145.2,955.2,501.1c124.8,263.8,124.8,515.4,0,781.3C4699.9,1213.2,4262.2,1425.9,3861.3,1327.8z" />
                    <path d="M7101.1,1239.8l-73.7-114.5l615.7-402.9c511.3-335.4,619.7-398.8,636.1-372.3c12.3,16.4,51.1,71.6,85.9,120.7l67.5,87.9l-139.1,90c-75.7,47.1-351.8,227-613.6,396.8c-261.8,171.8-482.7,310.9-490.9,308.8C7180.8,1354.3,7142,1303.2,7101.1,1239.8z" />
                    <path d="M9005.3,638.5c-227-45-425.4-202.5-527.7-423.4c-47-100.2-55.2-143.2-55.2-310.9s8.2-210.7,55.2-310.9c69.6-149.3,210.7-290.4,360-360c102.3-49.1,143.2-55.2,321.1-55.2c182.1,0,216.8,6.1,319.1,57.3c126.8,61.4,278.2,210.7,341.6,333.4c222.9,437.7-36.8,965.4-523.6,1069.7C9173,663,9136.2,663,9005.3,638.5z M9326.4,331.7c26.6-10.2,87.9-55.2,139.1-102.3c200.4-184.1,192.3-482.7-18.4-666.8C9156.6-693,8676-459.8,8702.6-73.3C8725,245.8,9027.8,442.1,9326.4,331.7z" />
                    <path d="M625.6,386.9C296.4,280.6,102,14.7,100-331c0-300.7,145.2-537.9,413.1-668.8c122.7-61.4,153.4-67.5,321.1-67.5c159.5,0,200.4,8.2,306.8,57.3c294.5,137,458.1,413.2,433.6,738.4c-12.3,186.1-69.5,312.9-198.4,450c-139.1,147.3-304.8,220.9-511.3,231.1C772.9,413.5,676.8,403.3,625.6,386.9z M993.8,96.5c114.5-38.9,247.5-175.9,278.2-286.3c51.1-182,14.3-325.2-116.6-456.1c-210.7-210.7-527.7-182-691.3,63.4c-159.5,235.2-73.6,542,182,662.7C770.9,137.4,862.9,141.5,993.8,96.5z" />
                    <path d="M2300.8,176.2l-540-132.9l12.3-55.2c8.2-28.6,18.4-92,26.6-139.1c6.1-49.1,20.5-87.9,30.7-87.9c24.5,0,1088.1,265.9,1096.3,276.1c4.1,2.1-2,40.9-12.3,83.9c-12.3,45-26.6,104.3-32.7,137c-8.2,30.7-20.4,55.2-28.6,53.2C2844.8,311.2,2595.3,249.9,2300.8,176.2z" />
                    <path d="M5068.1-189.9c-61.4-96.1-71.6-120.7-47.1-141.1c22.5-20.4,419.3-282.2,910.2-595.2l106.3-69.6l79.8,122.7l81.8,120.7l-505.2,325.2c-276.1,180-513.4,331.3-525.6,337.5C5153.9-81.5,5113-124.4,5068.1-189.9z" />
                    <path d="M3196.6-1376.1c-163.6-425.4-298.6-777.2-300.7-783.3c-4.1-10.2,188.2-96.1,247.5-110.5c16.4-4.1,102.3,208.6,521.6,1298.8l98.2,257.7l-104.3,40.9c-57.3,22.5-118.6,47.1-135,53.2C3497.3-609.1,3433.9-754.4,3196.6-1376.1z" />
                    <path d="M6649.1-715.5c-308.8-130.9-482.7-409.1-462.2-740.4c32.7-519.5,566.6-842.7,1034.9-632c229.1,102.3,364.1,261.8,425.4,499c67.5,261.8-10.2,529.7-208.6,715.9c-153.4,145.2-263.8,190.2-488.8,198.4C6792.2-668.5,6749.3-674.6,6649.1-715.5z M7115.4-993.7c175.9-79.8,296.6-302.7,263.8-490.9c-16.4-100.2-100.2-229.1-192.3-296.6c-218.8-161.6-552.2-71.6-668.8,180c-83.9,180-51.1,374.3,85.9,511.3C6735-958.9,6949.7-918,7115.4-993.7z" />
                    <path d="M2425.5-2425.4c-325.2-120.7-513.4-409.1-492.9-754.7c12.3-198.4,83.8-355.9,225-486.8c421.3-394.8,1092.2-198.4,1235.4,360c87.9,347.7-85.9,701.5-417.2,854.9C2818.2-2380.4,2578.9-2368.1,2425.5-2425.4z M2810-2695.4c272-81.8,402.9-423.4,251.6-666.8c-167.7-270-540-298.6-740.4-57.3c-155.4,188.2-137,450,42.9,619.7C2482.8-2685.1,2646.4-2646.3,2810-2695.4z" />
                  </g>
                </g>
              </svg>
            </div>
          </Link>

          <div className="hidden sm:flex sm:items-center gap-5">
            <Link href="/">
              <a className="text-white text-lg hover:text-indigo-800">Home</a>
            </Link>
            <Link href="/contactus">
              <a className="text-white text-lg hover:text-indigo-800">
                Contact Us
              </a>
            </Link>
            {auth?.user?.isTeacher && (
              <Link href="/manage">
                <a className="text-white text-lg hover:text-indigo-800">
                  Manage
                </a>
              </Link>
            )}
          </div>

          <div className="flex items-center">
            {auth?.user && (
              <>
                <a
                  onClick={() => auth.signout()}
                  className="text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:text-indigo-800 hover:bg-white"
                >
                  Signout
                </a>
                <a
                  onClick={() =>
                    triggerToast({
                      type: "info",
                      message: `Logged In as ${auth.user.regno}`,
                    })
                  }
                  className="text-white hover:text-indigo-800 ml-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
