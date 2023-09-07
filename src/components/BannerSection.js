import { ArrowRightIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { useEffect, useState } from "react";

function BannerSection() {
  const parentUrl = window.globalPrentUrl;
  const publicImagePath = window.publicImagePath;

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    async function fetchBanners() {
      const response = await axios.get(parentUrl+"/api/v1/banners");
      setBanners(response.data);
    }

    fetchBanners();
  }, [banners]);

  return (
    <div className="flex items-center justify-evenly h-80 bg-gray-900 relative shadow-md shadow-gray-400">
      {
        banners.map(banner =>(
          <img className="h-64 w-64" src={`${publicImagePath}${banner.imageName}`}/>
        ))
      }

      <div className="h-12 w-12 absolute right-4 flex items-center justify-center bg-white text-gray-500 rounded-full hover:cursor-pointer hover:transition">
        <ArrowRightIcon
          height={20}
          className=" hover:translate-x-1 duration-100"
        />
      </div>
    </div>
  );
}

export default BannerSection;
