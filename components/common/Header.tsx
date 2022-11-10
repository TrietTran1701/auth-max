import React from "react";

const Header = () => {
  return (
    <div className="px-[30px] py-[20px] header-container">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-end m-0 p-0 relative">
          <div className="text-[30px] font-bold relative">
            <span>Authentic</span>
            <span className="text-white">Max</span>
            <span className="text-[13px] absolute font-[300] top-1">®</span>
          </div>
          <span className="text-[13px] font-thin absolute top-[72%]">.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
