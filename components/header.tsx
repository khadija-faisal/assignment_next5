import React from "react";
import { Rye } from "next/font/google";
const rye = Rye({
  subsets: ["latin"],
  weight: "400",
});
function Header() {
  return (
    <div
      className={` ${rye.className} h-[114px] md:h-[120px] flex items-center bg-[#A29875]`}
    >
      <div className="md:text-[65px] text-[40px]  ml-9 inline  text-white">
        MANZZARI
      </div>
    </div>
  );
}
export default Header;
