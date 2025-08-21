import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="" width={150} />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @RajYash0 | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <a href="https://github.com/RajYash0">
          <img
            src={assets.github_icon}
            alt=""
            width={50}
            className="border border-zinc-900 p-1 inline-block rounded-full"
          />
        </a>
        <a href="https://x.com/RajYash29">
          <img
            src={assets.x_icon}
            alt=""
            width={50}
            className="border border-zinc-900 p-1 inline-block rounded-full"
          />
        </a>
        <a href="https://www.linkedin.com/in/RajYash0/">
          <img
            src={assets.linkedin_icon}
            alt=""
            width={50}
            className="border border-zinc-900 p-1 inline-block rounded-full"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
